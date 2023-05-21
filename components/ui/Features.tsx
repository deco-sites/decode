import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <div class="container min-h-[280px] p-6 sm:px-0 sm:py-10">
      <div class="">
        <div class="flex flex-col justify-evenly mx-6 sm:flex-row sm:mx-0 sm:my-10">
          {features.map(({ icon: id, title, description }) => (
            <div class="flex sm:w-1/4 w-full flex-row items-center sm:items-start gap-4 py-6 sm:flex-col sm:py-0 sm:px-8">
              <div class="p-8 sm:p-0">
                <Icon
                  fill="none"
                  id={id}
                  class={"scale-150 sm:scale-100"}
                  width={25}
                  height={25}
                  strokeWidth={2}
                />
              </div>
              <div class="flex flex-col gap-2">
                <span class="font-medium text-xl text-orange-500">{title}</span>
                <span class="text-sm">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
