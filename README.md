# Pseudo Progress

A small JavaScript package to help create smooth and randomised pseudo progress bars.

## Installation

Install this package via `npm`:

```sh
npm install @c6digital/pseudo-progress
```

## Usage

```js
import { pseudoProgress } from '@c6digital/pseudo-progress';

const bar = document.getElementById('bar');

pseudoProgress({
    minimumSteps: 4,                        // The minimum number of steps.
    maximumSteps: 8,                        // The maximum number of steps.
    minimumStepDuration: 100,               // The minimum duration of a step.
    maximumStepDuration: 300,               // The maximum duration of a step.
    minimumStepProgress: 10,                // The minimum progress increase for a step.
    maximumStepProgress: 25,                // The maximum progress increase for a step.
    onProgress: (progress: number) => {     // Called after each step and progress increase.
        bar.style.width = `${progress}%`;
    },
    onFinish: () => {                       // Called when all steps are complete and progress is 100.
        console.log('All done!')
    },
})
```