export interface Props {
  url: string;
  alt: string;
}

export default function ImageSection(props: Props) {
  return (
    <div class="w-full flex justify-center px-8 pb-8">
      <img
        src={props.url}
        class="rounded-xl border-4 border-white w-full sm:w-1/3"
        alt={props.alt}
      />
    </div>
  );
}