// 2015dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2015-DSE-MATH-CP2-Q01",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `$(x+1)(x^2+x+1)=$
<div class="q-mcopt">
A.\t$x^3+1$。<br>
B.\t$(x+1)^3$。<br>
C.\t$x^3+x^2+x+1$。<br>
D.\t$x^3+2x^2+2x+1$。
</div>`,
            en: `$(x+1)(x^2+x+1)=$
<div class="q-mcopt">
A.\t$x^3+1$.<br>
B.\t$(x+1)^3$.<br>
C.\t$x^3+x^2+x+1$.<br>
D.\t$x^3+2x^2+2x+1$.
</div>`
        },
        hint: {
            tc: `直接展開。`,
            en: `Expand it.`
        },
        solution: `D (90%)<p><iframe src="https://www.youtube.com/embed/9HJ8aktHw_I?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q02",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$\\dfrac{(3y^6)^4}{3y^2}=$
<div class="q-mcopt">
A.\t$4y^5$。 <br>
B.\t$4y^8$。 <br>
C.\t$27y^{12}$。 <br>
D.\t$27y^{22}$。 
</div>`,
        hint: `先處理指數再簡化。 `,
        solution: `D (94%)<p><iframe src="https://www.youtube.com/embed/qBszsISsuI4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q03",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `若 $p+3q=4$ 及 $5p+9q=2$，則 $p=$
<div class="q-mcopt">
A.\t$-5$。 <br>
B.\t$-3$。 <br>
C.\t$3$。 <br>
D.\t$5$。 
</div>`,
        hint: `由兩個方程聯立求解。 `,
        solution: `A (84%)<p><iframe src="https://www.youtube.com/embed/QkFRsnj5gOY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q04",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `$0.0023456789=$
<div class="q-mcopt">
A.\t$0.00235$（準確至六位小數）。 <br>
B.\t$0.002345$（準確至六位小數）。 <br>
C.\t$0.002346$（準確至六位有效數字）。 <br>
D.\t$0.00234568$（準確至六位有效數字）。 
</div>`,
        hint: `判斷有效數字及小數位。 `,
        solution: `D (75%)<p><iframe src="https://www.youtube.com/embed/daAgLJZ61Tc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q05",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: `若 $m$ 及 $n$ 均為常數使得 $x^2 + mx + n \\equiv (x+4)(x-m) + 6$，則 $n =$
<div class="q-mcopt">
A.\t$-8$。 <br>
B.\t$-2$。 <br>
C.\t$2$。 <br>
D.\t$6$。 
</div>`,
        hint: `展開兩邊並比較係數。 `,
        solution: `B (64%)<p><iframe src="https://www.youtube.com/embed/Dv5RosReiWA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q06",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `$18+7x > 4$  或  $5-2x < 3$  的解為
<div class="q-mcopt">
A.\t$x \\gt -2$。 <br>
B.\t$x \\gt -1$。 <br>
C.\t$x \\gt 1$。 <br>
D.\t$-2 \\lt x \\lt 1$。 
</div>`,
        hint: `分別解兩個不等式再取聯集。 `,
        solution: `A (63%)<p><iframe src="https://www.youtube.com/embed/uKpMqWw-vf4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q07",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `若 $\\beta$ 為方程 $4x^2 - 5x - 1 = 0$ 的根，則 $7+10\\beta - 8\\beta^2 =$
<div class="q-mcopt">
A.\t$5$。 <br>
B.\t$7$。 <br>
C.\t$9$。 <br>
D.\t$11$。 
</div>`,
        hint: `由方程得 $4\\beta^2 = 5\\beta + 1$，代入簡化。 `,
        solution: `A (59%)<p><iframe src="https://www.youtube.com/embed/OkFeivE8hJw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q08",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `圖中所示為 $y = a(x + b)^2$ 的圖像，其中 $a$ 及 $b$ 均為常數。 下列何者正確？
<div class="q-mcopt"><img src="img/2015dsep2q08.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a < 0$  及  $b < 0$<br>
B.\t$a < 0$  及  $b > 0$<br>
C.\t$a > 0$  及  $b < 0$<br>
D.\t$a > 0$  及  $b > 0$
</div><div style="clear: both;"></div>`,
        hint: `觀察開口方向及頂點位置。 `,
        solution: `D (53%)<p><iframe src="https://www.youtube.com/embed/ULd-sOwoK_U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q09",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `若某紀念品的價錢增加 $70\\%$ 且隨後減少 $60\\%$，求該紀念品的價錢改變的百分數。 
<div class="q-mcopt">
A.\t$-58\\%$<br>
B.\t$-32\\%$<br>
C.\t$2\\%$<br>
D.\t$10\\%$
</div>`,
        hint: `設原價為 100，計算最終價錢。 `,
        solution: `B (69%)<p><iframe src="https://www.youtube.com/embed/u2PXPF1s7DQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q10",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `存款 $\\$50\\,000$，年利率 $6\\%$，年期 $3$ 年，複利計算，每季一結。 求本利和準確至最接近的元。 
<div class="q-mcopt">
A.\t$\\$59\\,000$<br>
B.\t$\\$59\\,551$<br>
C.\t$\\$59\\,755$<br>
D.\t$\\$59\\,781$
</div>`,
        hint: `季利率為 $1.5\\%$，共 $12$ 期。 `,
        solution: `D (68%)<p><iframe src="https://www.youtube.com/embed/DKR3H0CYZEU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q11",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `設 $a$、$b$ 及 $c$ 均為非零的數。 若 $a:c=5:3$ 及 $b:c=3:2$，則 $(a+c):(b+c)=$
<div class="q-mcopt">
A.\t$7:5$。<br>
B.\t$8:5$。<br>
C.\t$16:15$。<br>
D.\t$19:15$。
</div>`,
        hint: `設比例後代入計算。 `,
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/mY6KUwFiWlc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q12",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $z$ 隨 $x^3$ 及 $y^2$ 正變。 當 $x=2$ 及 $y=1$ 時，$z=14$。 當 $x=3$ 及 $y=-2$ 時，$z=$
<div class="q-mcopt">
A.\t$-189$。 <br>
B.\t$-126$。 <br>
C.\t$126$。 <br>
D.\t$189$。 
</div>`,
        hint: `寫出 $z = k x^3 y^2$ 並求 $k$。 `,
        solution: `D (75%)<p><iframe src="https://www.youtube.com/embed/v4VoPEPM3oI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q13",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: `圖中，第 $1$ 個圖案包含 $5$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $4$ 粒點子所組成。 求第 $6$ 個圖案的點子數目。
<img src="img/2015dsep2q13.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-mcopt">
A.\t$21$<br>
B.\t$25$<br>
C.\t$29$<br>
D.\t$33$
</div>`,
        hint: `等差數列通項計算。 `,
        solution: `B (92%)<p><iframe src="https://www.youtube.com/embed/GXHpluMxAZc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q14",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `現有砂糖一袋。 該袋內砂糖的重量量得 $5\\text{ kg}$ 準確至最接近的 kg。 若將該袋砂糖包裝成 $n$ 包使每包內砂糖的重量均量得 $10\\text{ g}$ 準確至最接近的 g，求 $n$ 的最大可取值。 
<div class="q-mcopt">
A.\t$429$<br>
B.\t$500$<br>
C.\t$578$<br>
D.\t$579$
</div>`,
        hint: `考慮重量誤差範圍。 `,
        solution: `C (56%)<p><iframe src="https://www.youtube.com/embed/MCfmVbNzTok?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q15",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Mensuration"],
        difficulty: 1,
        content: `圖中，$N$ 為 $AC$ 上的一點且 $E$ 為 $DN$ 上的一點。 若 $DN = 6\\text{ cm}$ 及 $EN = 5\\text{ cm}$，則 $\\Delta ABC$ 的面積為
<div class="q-mcopt"><img src="img/2015dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$24\\text{ cm}^2$。 <br>
B.\t$30\\text{ cm}^2$。 <br>
C.\t$96\\text{ cm}^2$。 <br>
D.\t$192\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與高的比例。 `,
        solution: `C (91%)<p><iframe src="https://www.youtube.com/embed/iibgW3dMcic?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q16",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `一直立圓錐體的高及底半徑分別為 $12\\text{ cm}$ 及 $9\\text{ cm}$。 圖中所示的平截頭體是從該圓錐體切去其上部分而成。 該平截頭體的高為 $8\\text{ cm}$，求該平截頭體的體積。 
<div class="q-mcopt"><img src="img/2015dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$210\\pi\\text{ cm}^3$<br>
B.\t$312\\pi\\text{ cm}^3$<br>
C.\t$324\\pi\\text{ cm}^3$<br>
D.\t$936\\pi\\text{ cm}^3$
</div><div style="clear: both;"></div>`,
        hint: `用相似求小圓錐半徑後計算體積差。 `,
        solution: `B (70%)<p><iframe src="https://www.youtube.com/embed/ImDLmdd3XZ0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q17",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 3,
        content: `圖中，$ABCD$ 為一平行四邊形。 $E$ 為 $CD$ 上的一點使得 $DE:EC = 2:3$。 $AD$ 的延線與 $BE$ 的延線相交於 $F$，而 $AE$ 的延線與 $BC$ 的延線相交於 $G$。 若 $\\Delta DEF$ 的面積為 $8\\text{ cm}^2$，則 $\\Delta CEG$ 的面積為
<div class="q-mcopt"><img src="img/2015dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$12\\text{ cm}^2$。 <br>
B.\t$18\\text{ cm}^2$。 <br>
C.\t$20\\text{ cm}^2$。 <br>
D.\t$27\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與底的比例關係。 `,
        solution: `D (26%)<p><iframe src="https://www.youtube.com/embed/snQKCQkubmM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q18",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，$\\dfrac{AD}{AB} =$
<div class="q-mcopt"><img src="img/2015dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\cos \\alpha \\tan \\beta$。 <br>
B.\t$\\sin \\alpha \\tan \\beta$。 <br>
C.\t$\\dfrac{\\cos \\alpha}{\\tan \\beta}$。 <br>
D.\t$\\dfrac{\\sin \\alpha}{\\tan \\beta}$。 
</div><div style="clear: both;"></div>`,
        hint: `在直角三角形中表達比值。 `,
        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/okc592xb69w?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q19",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `$\\dfrac{\\cos 180^\\circ}{1 + \\sin(90^\\circ + \\theta)} + \\dfrac{\\cos 360^\\circ}{1 + \\sin(270^\\circ + \\theta)} =$
<div class="q-mcopt">
A.\t$0$。 <br>
B.\t$\\dfrac{2}{\\cos \\theta}$。 <br>
C.\t$\\dfrac{2 \\cos \\theta}{\\sin^2 \\theta}$。 <br>
D.\t$\\dfrac{2 \\sin \\theta}{\\cos^2 \\theta}$。 
</div>`,
        hint: `先化簡特殊角及誘導公式。 `,
        solution: `C (63%)<p><iframe src="https://www.youtube.com/embed/Cr1Jge3Wmjw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q20",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$AD$ 為圓 $ABCDE$ 的一直徑。 若 $\\angle BAD = 58^\\circ$ 及 $BC = CD$，則 $\\angle AEC =$
<div class="q-mcopt"><img src="img/2015dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$32^\\circ$。 <br>
B.\t$58^\\circ$。 <br>
C.\t$61^\\circ$。 <br>
D.\t$64^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用直徑及等弦對等角。 `,
        solution: `C (60%)<p><iframe src="https://www.youtube.com/embed/yn7kLLnFKpo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q21",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Mensuration"],
        difficulty: 1,
        content: `圓 $ABCD$ 的直徑 $AC$ 與直徑 $BD$ 相交於點 $E$。 若 $\\angle AEB = 90^\\circ$ 及 $AC = 24\\text{ cm}$，則 $\\Delta AEB$ 的面積為
<div class="q-mcopt">
A.\t$41\\text{ cm}^2$。 <br>
B.\t$72\\text{ cm}^2$。 <br>
C.\t$144\\text{ cm}^2$。 <br>
D.\t$288\\text{ cm}^2$。 
</div>`,
        hint: `直徑互相垂直時為正方形。 `,
        solution: `B (72%)<p><iframe src="https://www.youtube.com/embed/cRgS-oKCG7Y?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q22",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `若某正多邊形的一內角為該多邊形的一外角的 $5$ 倍，則下列何者正確？
<div class="q-mcms">
I.\t該多邊形的每一內角均為 $150^\\circ$。
II.\t該多邊形的對角線數目為 $6$。
III.\t該多邊形的旋轉對稱的折式數目為 $6$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 II<br>
D.\t只有 II 及 III
</div>`,
        hint: `由內外角關係求邊數。 `,
        solution: `A (47%)<p><iframe src="https://www.youtube.com/embed/FPeLfaBME0Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q23",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">點 $A$ 的直角坐標為 $(\\sqrt{3}, -1)$。 若 $A$ 對 $y$ 軸作反射，則它的像的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(1, 210^\\circ)$。 <br>
B.\t$(1, 240^\\circ)$。 <br>
C.\t$(2, 210^\\circ)$。 <br>
D.\t$(2, 240^\\circ)$。 
</div>`,
        hint: `先反射再轉極坐標。 `,
        solution: `C (59%)<p><iframe src="https://www.youtube.com/embed/MAi3hdiEdYc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q24",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 1,
        content: `點 $A$ 及點 $B$ 的坐標分別為 $(2, 0)$ 及 $(1, 5)$。 若 $P$ 為直角坐標平面上的一動點使得 $P$ 與 $A$ 及 $B$ 等距，則 $P$ 的軌跡是
<div class="q-mcopt">
A.\t$AB$ 的垂直平分線。 <br>
B.\t以 $AB$ 為一直徑的圓。 <br>
C.\t通過 $A$ 及 $B$ 的直線。 <br>
D.\t$\\angle AOB$ 的角平分線，其中 $O$ 為原點。 
</div>`,
        hint: `$PA=PB$ 的軌跡是垂直平分線。 `,
        solution: `A (73%)<p><iframe src="https://www.youtube.com/embed/xd1K3QZ_L3g?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q25",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $ax=1$ 及 $bx+cy=1$。 下列何者正確？
<div class="q-mcms"><img src="img/2015dsep2q25.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$a \\lt b$
III.\t$c \\gt 0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷截距及斜率。 `,
        solution: `B (37%)<p><iframe src="https://www.youtube.com/embed/hDUnE-tiru0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q26",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 1,
        content: `圓 $C$ 通過點 $(0,3)$。 若 $C$ 的圓心的坐標為 $(-4,3)$，則 $C$ 的方程為
<div class="q-mcopt">
A.\t$x^2 + y^2 - 8x + 6y + 9 = 0$。 <br>
B.\t$x^2 + y^2 - 8x + 6y + 16 = 0$。 <br>
C.\t$x^2 + y^2 + 8x - 6y + 9 = 0$。 <br>
D.\t$x^2 + y^2 + 8x - 6y + 16 = 0$。 
</div>`,
        hint: `用圓心及半徑求方程。 `,
        solution: `C (70%)<p><iframe src="https://www.youtube.com/embed/gWtVYBHXPis?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q27",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `在某遊戲中投擲兩枚勻稱骰子。 若所擲得的兩數之和為 $7$，將賺得 $\\$36$； 否則，將賺得 $\\$6$。 求在該遊戲中所賺得的金額的期望值。 
<div class="q-mcopt">
A.\t$\\$11$<br>
B.\t$\\$12$<br>
C.\t$\\$30$<br>
D.\t$\\$31$
</div>`,
        hint: `計算和為 7 的概率後求期望值。 `,
        solution: `A (47%)<p><iframe src="https://www.youtube.com/embed/Fm9QZ0EILsM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q28",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Statistical Graphs"],
        difficulty: 1,
        content: `下面的棒形圖顯示某班學生擁有鑰匙的數目的分佈。 求從該班中隨機選出一名學生擁有 $3$ 條鑰匙的概率。 
<div class="q-mcopt"><img src="img/2015dsep2q28zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{2}{11}$<br>
C.\t$\\dfrac{4}{11}$<br>
D.\t$\\dfrac{9}{11}$
</div><div style="clear: both;"></div>`,
        hint: `由棒形圖讀取人數後計算。 `,
        solution: `B (84%)<p><iframe src="https://www.youtube.com/embed/OACURmO4a1M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q29",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的框線圖顯示在某學期一些教師的閱書數目的分佈。 求該分佈的四分位數間距。
		<img src="img/2015dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-mcopt">
A.\t$20$<br>
B.\t$35$<br>
C.\t$40$<br>
D.\t$45$
</div>`,
        hint: `從框線圖讀取 $Q_1$ 及 $Q_3$。 `,
        solution: `A (91%)<p><iframe src="https://www.youtube.com/embed/VWSFGHB3vIo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q30",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: `考慮以下整數：<div style="text-align: center;">2　2　3　3　3　3　3　5　5　6　8　8　9　10　$m$</div>設 $p$、$q$ 及 $r$ 分別為以上整數的平均值、中位數及眾數。 若 $3 \\le m \\le 5$，則下列何者必為正確？
<div class="q-mcms">
I.\t$p \\gt q$
II.\t$p \\gt r$
III.\t$q \\gt r$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `由 $m$ 的範圍判斷平均值、中位數、眾數。 `,
        solution: `B (45%)<p><iframe src="https://www.youtube.com/embed/2Oh9Ddrt4Gk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q31",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 2,
        content: `$\\dfrac{1}{x^2 - 2x + 1} - \\dfrac{1}{x^2 + x - 2} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{(x-1)(x+2)}$。<br>
B.\t$\\dfrac{1}{(x-1)^2(x+2)}$。<br>
C.\t$\\dfrac{3}{(x-1)^2(x+2)}$。<br>
D.\t$\\dfrac{2x+1}{(x-1)^2(x+2)}$。
</div>`,
        hint: `通分後合併分子。 `,
        solution: `C (62%)<p><iframe src="https://www.youtube.com/embed/N6xr8LGoYxg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q32",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `圖中的圖像顯示 $\\log_3 x$ 與 $\\log_3 y$ 之間的線性關係。 下列何者必為正確？
<div class="q-mcopt"><img src="img/2015dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$x^2 y^3 = 729$<br>
B.\t$x^3 y^2 = 729$<br>
C.\t$x^2 + y^3 = 729$<br>
D.\t$x^3 + y^2 = 729$
</div><div style="clear: both;"></div>`,
        hint: `由斜率及截距換底。 `,
        solution: `A (30%)<p><iframe src="https://www.youtube.com/embed/OaIJSkqQKh0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q33",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `$11 + 2^6 + 2^{10} + 2^{11} =$
<div class="q-mcopt">
A.\t$110001001011_2$。<br>
B.\t$110100100011_2$。<br>
C.\t$1100001001011_2$。<br>
D.\t$1101001000011_2$。
</div>`,
        hint: `直接轉成二進制。 `,
        solution: `A (66%)<p><iframe src="https://www.youtube.com/embed/Z-NwWiJVjIA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q34",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $k$ 為一常數。 若二次方程 $x^2 + kx - 2 = 0$ 的根為 $\\alpha$ 及 $\\beta$，則 $\\alpha^2 + \\beta^2 =$
<div class="q-mcopt">
A.\t$k^2$。 <br>
B.\t$k^2 + 4$。 <br>
C.\t$k^2 - 4$。 <br>
D.\t$k^2 - 8$。 
</div>`,
        hint: `用韋達定理 $\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$。 `,
        solution: `B (62%)<p><iframe src="https://www.youtube.com/embed/wCfg2rkWghc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q35",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `設 $z = (a+5)i^6 + (a-3)i^7$，其中 $a$ 為一實數。 若 $z$ 為一實數，則 $a =$
<div class="q-mcopt">
A.\t$-5$。 <br>
B.\t$-3$。 <br>
C.\t$3$。 <br>
D.\t$5$。 
</div>`,
        hint: `令虛部為零。 `,
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/CLxW2PTcWvA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q36",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `圖中所示為一陰影區域（包括邊界在內）。 若 $(a, b)$ 為陰影區域中的一點，則下列何者正確？
<div class="q-mcms"><img src="img/2015dsep2q36.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\le 4$
II.\t$a \\ge b - 5$
III.\t$a \\ge 10 - 2b$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由邊界直線判斷不等式。 `,
        solution: `D (43%)<p><iframe src="https://www.youtube.com/embed/U3vsSAasQtc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q37",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 3,
        content: `設 $x_n$ 為一等比數列的第 $n$ 項。 若 $x_6 = 216$ 及 $x_8 = 96$，則下列何者必為正確？
<div class="q-mcms">
I.\t$x_3 = 729$
II.\t$\\dfrac{x_5}{x_7} \\gt 1$
III.\t$x_2 + x_4 + x_6 + \\cdots + x_{2n} \\lt 2015$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `求公比後判斷各選項。 `,
        solution: `D (27%)<p><iframe src="https://www.youtube.com/embed/qTiTucm_2Ts?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q38",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `當 $0^\\circ \\le x < 360^\\circ$ 時，方程 $\\cos^2 x - \\sin x = 1$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
        hint: `化成關於 $\\sin x$ 的方程後考慮範圍。 `,
        solution: `B (36%)<p><iframe src="https://www.youtube.com/embed/v9sxXBoDd24?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q39",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `設 $k$ 為一正常數且 $-180^\\circ < \\theta < 180^\\circ$。 若圖中所示為 $y = \\sin(kx^\\circ + \\theta)$ 的圖像，則
<div class="q-mcopt"><img src="img/2015dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$k = \\dfrac{1}{2}$  及  $\\theta = -30^\\circ$。 <br>
B.\t$k = \\dfrac{1}{2}$  及  $\\theta = 30^\\circ$。 <br>
C.\t$k = 2$  及  $\\theta = -30^\\circ$。 <br>
D.\t$k = 2$  及  $\\theta = 30^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `由週期及相位判斷。 `,
        solution: `D (49%)<p><iframe src="https://www.youtube.com/embed/ww7QS4oVuGY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q40",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$AB$ 及 $AC$ 分別為圓在 $B$ 及 $C$ 的切線。 $BD$ 為該圓的一直徑。 $AC$ 的延線與 $BD$ 的延線相交於 $E$。 若 $AB = 6\\text{ cm}$ 及 $AE = 10\\text{ cm}$，則 $BD =$
<div class="q-mcopt"><img src="img/2015dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$3\\text{ cm}$。 <br>
B.\t$5\\text{ cm}$。 <br>
C.\t$6\\text{ cm}$。 <br>
D.\t$8\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
        hint: `利用切線性質及相似三角形。 `,
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/1uFju3ulrVk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q41",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: `求常數 $k$ 使得圓 $x^2 + y^2 + 2x - 6y + k = 0$ 與直線 $x + y + 4 = 0$ 只相交於一點。 
<div class="q-mcopt">
A.\t$-16$<br>
B.\t$-8$<br>
C.\t$8$<br>
D.\t$16$
</div>`,
        hint: `將直線代入圓方程後令判別式為零。 `,
        solution: `B (42%)<p><iframe src="https://www.youtube.com/embed/YCsrasQ2v8k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q42",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle"],
        difficulty: 3,
        content: `設 $O$ 為原點。 點 $P$ 及點 $Q$ 的坐標分別為 $(0, 60)$ 及 $(96, 48)$。 $\\Delta OPQ$ 的垂心的 $x$ 坐標為
<div class="q-mcopt">
A.\t$6$。 <br>
B.\t$32$。 <br>
C.\t$45$。 <br>
D.\t$48$。 
</div>`,
        hint: `利用垂心性質及垂直條件。 `,
        solution: `A (30%)<p><iframe src="https://www.youtube.com/embed/rMtmDM8SFlk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q43",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `$6$ 名男生與 $2$ 名女生排成一隊。 若沒有女生相鄰而排，則可排成多少不同的隊？
<div class="q-mcopt">
A.\t$1\\,440$<br>
B.\t$10\\,080$<br>
C.\t$30\\,240$<br>
D.\t$35\\,280$
</div>`,
        hint: `先排男生再插入女生。 `,
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/_0z7qyAnJRs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q44",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `$P$ 袋內有 $2$ 個紅球及 $4$ 個綠球，而 $Q$ 袋內有 $1$ 個紅球及 $3$ 個綠球。 若隨機選取一袋且隨後從該袋中隨機抽出一個球，求抽出綠球的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{3}{10}$<br>
B.\t$\\dfrac{7}{10}$<br>
C.\t$\\dfrac{7}{24}$<br>
D.\t$\\dfrac{17}{24}$
</div>`,
        hint: `用全概率公式。 `,
        solution: `D (51%)<p><iframe src="https://www.youtube.com/embed/75QEqCWaKBk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q45",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Change of Data"],
        difficulty: 3,
        content: `設 $x_1$、$y_1$ 及 $z_1$ 分別為某組數 $\\{a_1, a_2, a_3, \\dots, a_{50}\\}$ 的平均值、中位數及方差，而 $x_2$、$y_2$ 及 $z_2$ 分別為 $\\{a_1, a_2, a_3, \\dots, a_{49}\\}$ 這組數的平均值、中位數及方差。 若 $x_1 = a_{50}$，則下列何者必為正確？
<div class="q-mcms">
I.\t$x_1 = x_2$
II.\t$y_1 \\ge y_2$
III.\t$z_1 \\le z_2$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `當最後一項等於平均值時，去掉它不改變平均值。 `,
        solution: `B (25%)<p><iframe src="https://www.youtube.com/embed/HVcm1XeQguA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
