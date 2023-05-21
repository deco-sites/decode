export interface Props {
    text: string;
}

export default function TextSection({ text }: Props) {
    return (
        <div class="flex flex-col items-center px-8 w-full pb-8">
            <div class="w-full sm:w-1/3">
                <h3 class="text-lg">{text}</h3>
            </div>
        </div>
    )
}