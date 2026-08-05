export default function ProgressPath({
  currentStep,
  totalSteps,
  completedStep,
}) {
  const steps = Array.from({ length: totalSteps + 1 }, (_, index) => index);

  return (
    <div
      className="progress-path"
      aria-label={`Etapa ${currentStep} de ${totalSteps}`}
    >
      {steps.map((step, index) => {
        const isCover = step === 0;
        const isCurrent = currentStep === step;
        const isDone = completedStep >= step && step !== 0;
        const isCoverDone = step === 0 && currentStep > 0;

        return (
          <div className="progress-unit" key={step}>
            <span
              className={[
                "progress-node",
                isCurrent ? "is-current" : "",
                isDone || isCoverDone ? "is-done" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isCover ? "♥" : step}
            </span>

            {index < steps.length - 1 && (
              <span
                className={[
                  "progress-connector",
                  completedStep > step || currentStep > step ? "is-done" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
