import { Check } from "lucide-react";

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "email"; text: string }
  | { type: "contact"; lines: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export default function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide text-white mt-12 mb-4 pb-3 border-b border-white/10 first:mt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="text-base sm:text-lg font-display font-semibold text-white mt-8 mb-3"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={index} className="text-base leading-8 text-muted-foreground mb-4">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="space-y-3 mb-5">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-base leading-7 text-muted-foreground"
                  >
                    <Check className="w-4 h-4 mt-1.5 shrink-0 text-[#F2871E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "email":
            return (
              <p key={index} className="mb-4">
                <a
                  href={`mailto:${block.text}`}
                  className="font-mono text-sm text-[#F2871E] hover:underline"
                >
                  {block.text}
                </a>
              </p>
            );
          case "contact":
            return (
              <div
                key={index}
                className="mb-5 rounded-xl border border-white/10 bg-white/[0.04] p-5 space-y-1"
              >
                {block.lines.map((line, lineIndex) => {
                  const match = line.match(/^([\w .-]+:)\s*(.+)$/);
                  if (match) {
                    const [, label, value] = match;
                    const isEmail = /@/.test(value);
                    return (
                      <p key={lineIndex} className="text-sm text-muted-foreground">
                        <span className="text-white/70">{label}</span>{" "}
                        {isEmail ? (
                          <a href={`mailto:${value}`} className="text-[#F2871E] hover:underline">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </p>
                    );
                  }
                  return (
                    <p key={lineIndex} className="text-sm font-semibold text-white">
                      {line}
                    </p>
                  );
                })}
              </div>
            );
          case "table":
            return (
              <div
                key={index}
                className="mb-5 overflow-x-auto rounded-xl border border-white/10"
              >
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-white/[0.06]">
                      {block.headers.map((header, headerIndex) => (
                        <th
                          key={headerIndex}
                          className="px-4 py-3 font-display font-semibold uppercase tracking-wide text-xs text-white whitespace-nowrap border-b border-white/10"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-white/10 last:border-0">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={
                              cellIndex === 0
                                ? "px-4 py-3 align-top font-medium text-white whitespace-nowrap"
                                : "px-4 py-3 align-top text-muted-foreground"
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
