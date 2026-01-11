import { useEffect, useState } from "react";
import Lottie, { LottieComponentProps } from "lottie-react";
import { cn } from "@/lib/utils";

interface LottieAnimationProps extends Omit<LottieComponentProps, "animationData"> {
    animationData?: any;
    path?: string;
    className?: string;
}

export function LottieAnimation({ animationData: initialData, path, className, ...props }: LottieAnimationProps) {
    const [data, setData] = useState<any>(initialData);
    const [isLoading, setIsLoading] = useState(!!path && !initialData);

    useEffect(() => {
        if (path && !initialData) {
            setIsLoading(true);
            fetch(path)
                .then((res) => {
                    if (!res.ok) throw new Error("Failed to load animation");
                    return res.json();
                })
                .then((json) => {
                    setData(json);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error("Lottie load error:", err);
                    setIsLoading(false);
                });
        }
    }, [path, initialData]);

    if (isLoading) {
        return <div className={cn("animate-pulse bg-amber-100/20 rounded-3xl w-full aspect-square", className)} />;
    }

    if (!data) return null;

    return (
        <div className={className}>
            <Lottie animationData={data} {...props} />
        </div>
    );
}
