import { useJs } from "$store/sdk/useJs.tsx";

export interface Props {
  expectedOutput: string;
  linesOfCode: string[];
}
4
export default function CodeSection({ expectedOutput, linesOfCode }: Props) {
  const { input, isCorrect, output, run, setInput } = useJs({ expectedOutput });

  return (
    <div class="flex flex-col items-center px-8 pb-8">
      <div class="mockup-code bg-primary w-full sm:w-1/3">
        {linesOfCode.map((line) => (
          <pre>
            <code>{line}</code>
          </pre>
        ))}
      </div>
      <div class="flex flex-col gap-4 w-full sm:w-1/3">
        <h3 class="text-lg">Write your code here!</h3>
        <textarea
          value={input}
          // deno-lint-ignore no-explicit-any
          onInput={(e: any) => setInput(e.target.value)}
          class="textarea textarea-bordered resize-none"
          cols={30}
          rows={3}
        ></textarea>
        <button class="btn" onClick={run}>
          Run
        </button>
        {output.length ? (
          <p>{isCorrect ? "Nice!" : "Oops, try again!"}</p>
        ) : null}
        <div
          class={`mockup-code bg-primary ${
            output.length && isCorrect ? "" : ""
          }`}
        >
          <pre>
            <code>{output}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
