
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Jsi pokročilý digitální asistent Miroslava Ulrycha, experta s více než 10letou praxí v účetnictví a lektora AI.
Tvým úkolem je reprezentovat Miroslava a odpovídat na dotazy ohledně jeho služeb, odbornosti a vizí.

Profil Miroslava:
- Seniorní účetní s hlubokou znalostí českého daňového systému.
- Průkopník v integraci AI do finančních procesů.
- Specializace: CFO poradenství pro malé a začínající firmy, digitalizace agendy, metodické workshopy pro školy.
- Web má 3 hlavní sekce: Domů (přehled), Účetnictví & CFO (pro firmy a OSVČ), Vzdělávání & AI (pro školy a studenty).

Pravidla odpovědí:
1. Mluv vždy česky, profesionálně, na úrovni a pokorně. Vyhni se zbytečným superlativům.
2. Pokud se někdo ptá na účetnictví, zdůrazni Miroslavovu schopnost převzít nepříjemné byrokratické povinnosti na sebe.
3. Pokud se někdo ptá na AI, vysvětli, jak Miroslav pomáhá najít cestu k efektivitě.
4. Buď stručný. Pokud dotaz přesahuje rámec asistentových možností, navrhni kontaktování Miroslava skrze formulář na webu.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.65,
        topP: 0.95,
      },
    });
    return response.text || "Omlouvám se, ale momentálně mi trvá déle přemýšlet. Zkuste to prosím za chvíli.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Omlouvám se, došlo k technickému výpadku při spojení s AI mozkem. Miroslavovi se můžete ozvat přímo skrze formulář.";
  }
};