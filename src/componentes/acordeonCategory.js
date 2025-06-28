import React, { useState } from "react";

const produtos = {
  alimentos: ["Arroz", "Feijão", "Leite"],
  higiene: ["Sabonete", "Shampoo", "Desodorante"],
  lar: ["Vassoura", "Detergente", "Pano de chão"],
};

function AccordionItem({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, marginBottom: 10 }}>
      <div
        style={{
          padding: 10,
          background: "#f2f2f2",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? "▲" : "▼"}
      </div>

      {isOpen && (
        <div style={{ padding: 10 }}>
          <ul>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: 5 }}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function AccordionCategorias() {
  return (
    <div style={{ maxWidth: 200, margin: "20px auto" }}>
      <AccordionItem title="🥦 Categoria" items={produtos.alimentos} />
      <AccordionItem title="🧼 Higiene" items={produtos.higiene} />
      <AccordionItem title="🪑 Artigos para o Lar" items={produtos.lar} />
    </div>
  );
}