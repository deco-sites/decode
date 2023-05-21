export interface Props {
  author: string;
}

export default function LessonNavbar({ author }: Props) {
  return (
    <div class="p-4 border-b border-white mb-16 flex justify-between">
      <a href="/" class="underline text-white">Back to Homepage</a>
      <p class="text-white font-semibold">{author}</p>
    </div>
  );
}
