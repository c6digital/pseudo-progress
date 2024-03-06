type PseudoProgressOptions = {
    minimumSteps: number;
    maximumSteps: number;
    minimumStepDuration: number;
    maximumStepDuration: number;
    minimumStepProgress: number;
    maximumStepProgress: number;
    onProgress: (progress: number) => void;
    onFinish: () => void;
}

export async function pseudoProgress(options: PseudoProgressOptions) {
    // Merge options with a set of defaults.
    options = {
        onProgress: (_: number) => {},
        onFinish: () => {},
        ...options,
    } as PseudoProgressOptions;

    // Figure out how many steps we're going to do.
    const steps = randomNumberBetween(options.minimumSteps, options.maximumSteps);
    let progress = 0;

    // Loop through each step.
    for (let step = 0; step <= steps; step++) {
        // Figure out how long this step should take.
        const duration = randomNumberBetween(options.minimumStepDuration, options.maximumStepDuration);
        // Figure out how much progress we should make.
        const increment = randomNumberBetween(options.minimumStepProgress, options.maximumStepProgress);

        // Wait for the duration of the step.
        await wait(duration);

        // Increment progress, clamping it to 100.
        progress += Math.min(Math.max(increment, 0), 100);

        // Update the progress.
        options.onProgress(progress);
    }

    options.onProgress(100);
    options.onFinish();
}

function randomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function wait(duration: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}