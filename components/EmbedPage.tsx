// components/EmbedPage.tsx
type EmbedPageProps = {
  url: string;
};

export default function EmbedPage({ url }: EmbedPageProps) {
  return (
    <iframe
      src={url}
      width={375}
      height={812}
      style={{
        border: "1px solid #ccc",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
}
