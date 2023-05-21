import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

function Newsletter() {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
      <div class="flex flex-col gap-2 max-w-[400px]">
        <span class="font-medium text-2xl text-primary-content">
          Register yourself
        </span>
        <span class="text-sm text-primary-content">
          Be the first one to know when we drop something new, and get <span class="text-orange-500 font-semibold">15% discount</span> on all courses.
        </span>
      </div>
      <form
        class="font-body text-body w-full sm:w-[408px] form-control"
        onSubmit={handleSubmit}
      >
        <div class="input-group">
          <input
            name="email"
            class="flex-grow input input-bordered"
            placeholder="Your email"
          />
          <button class="btn disabled:loading" disabled={loading}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
