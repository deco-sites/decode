import { useJs } from "$store/sdk/useJs.tsx";

export interface Props {
  title: string;
  code?: {
    expectedOutput: string;
    lines: string[];
  };
  lesson?: {
    lessonTitle: string;
    lessonSections: {
      text: string;
    }[];
  };
}

export default function Terminal({ title, code, lesson }: Props) {
  const { input, output, run, setInput, isCorrect } = useJs({
    expectedOutput: code ? code.expectedOutput : "John Doe",
  });

  return (
    <div
      id="terminal"
      class="w-full flex flex-col justify-center items-center gap-16 py-24 sm:py-0 sm:h-screen"
    >
      <h2 class="text-4xl text-center px-8">
        {title}
      </h2>
      <div class="sm:w-2/3 w-4/5 flex flex-col sm:flex-row gap-8 justify-around">
        <div class="flex flex-col items-start gap-4 sm:w-1/2">
          <h3 class="text-xl font-semibold">
            {lesson ? lesson.lessonTitle : "Javascript Hello world"}
          </h3>
          {lesson
            ? (
              lesson.lessonSections.map(
                (section) => <p class="text-lg">{section.text}</p>,
              )
            )
            : (
              <>
                <p class="text-lg">
                  Javascript intro - Part 1: Declaring variables
                </p>
                <p class="text-lg">
                  To declare variables in javascript, you can use the{" "}
                  <span class="text-amber-500">let</span> keyword.
                </p>
              </>
            )}
          <div class="mockup-code bg-primary w-full">
            {code
              ? (
                code.lines.map((line) => <pre><code>{line}</code></pre>)
              )
              : (
                <>
                  <pre><code>let name = "John Doe";</code></pre>
                  <pre><code>console.log(name);</code></pre>
                </>
              )}
          </div>
          <p class="text-lg">
            Try to print the text "{code ? code.expectedOutput : "John Doe"}" to
            the terminal!
          </p>
        </div>
        <div class="flex flex-col gap-4 sm:w-1/3">
          <h3 class="text-lg">Write your code here!</h3>
          <textarea
            value={input}
            // deno-lint-ignore no-explicit-any
            onInput={(e: any) => setInput(e.target.value)}
            class="textarea textarea-bordered resize-none"
            cols={30}
            rows={3}
          >
          </textarea>
          <button class="btn" onClick={run}>Run</button>
          {output.length
            ? <p>{isCorrect ? "Nice!" : "Oops, try again!"}</p>
            : null}
          <div
            class={`mockup-code bg-primary ${
              (output.length && isCorrect) ? "" : ""
            }`}
          >
            <pre><code>{output}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
