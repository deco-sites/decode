import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  subtitle: string;
}

export default function DecoHero({ title, subtitle }: Props) {

  return (
    <div
      id="terminal"
      class="w-full flex flex-col justify-center items-center gap-8 py-24 sm:py-0 sm:h-screen"
    >
      <h2 class="text-4xl text-center px-8">
        {title}
      </h2>
      <p class="text-2xl text-center">{subtitle}</p>
      <div class="sm:w-2/3 w-4/5 flex flex-col sm:flex-row gap-8 justify-around">
        <img src="https://i.imgur.com/wHQQABP.png" class="rounded-xl border-4 border-white" alt="Building a Lesson using the Deco admin panel" />
      </div>
        <span class="flex items-center gap-1 text-primary-content">
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
        </span>
    </div>
  );
}
