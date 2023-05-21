export interface Props {
  content: string;
}

export default function LessonTitle(props: Props) {
  return (
    <div className="flex flex-col items-center px-8 w-full pb-8">
      <div class="w-full sm:w-1/3">
        <h3 class="text-2xl font-semibold">{props.content}</h3>
      </div>
    </div>
  );
}