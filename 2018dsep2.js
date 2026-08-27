// 2018dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2018-DSE-MATH-CP2-Q01",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{8^{2n+1}}{4^{3n+1}} =$
<div class="q-mcopt">
A.\t$1$。<br>
B.\t$2$。<br>
C.\t$2^n$。<br>
D.\t$2^{-n}$。 
</div>`,
            en: `$\\dfrac{8^{2n+1}}{4^{3n+1}} =$
<div class="q-mcopt">
A.\t$1$.<br>
B.\t$2$.<br>
C.\t$2^n$.<br>
D.\t$2^{-n}$. 
</div>`
        },
        hint: {
            tc: `先化成相同底數再簡化指數。`,
            en: `Convert them to the same base, then simplify the exponent.`
        },
        solution: `B (71%)<p><iframe src="https://www.youtube.com/embed/uemx3U3O3EY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q02",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $\\dfrac{\\alpha - \\beta}{1-x} = \\dfrac{\\beta}{x}$，則 $x =$
<div class="q-mcopt">
A.\t$\\dfrac{\\alpha}{\\alpha - \\beta}$。 <br>
B.\t$\\dfrac{\\alpha}{\\alpha + \\beta}$。 <br>
C.\t$\\dfrac{\\beta}{\\alpha - \\beta}$。 <br>
D.\t$\\dfrac{\\beta}{\\alpha + \\beta}$。 
</div>`,
        hint: `交叉相乘後整理含 $x$ 的項。`,
        solution: `D (80%)<p><iframe src="https://www.youtube.com/embed/8jbSu5Y9VAE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q03",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$h^2 - 6h - 4k^2 - 12k =$
<div class="q-mcopt">
A.\t$(h-2k)(h-2k+6)$。 <br>
B.\t$(h-2k)(h+2k+6)$。 <br>
C.\t$(h+2k)(h-2k-6)$。 <br>
D.\t$(h+2k)(h+2k-6)$。 
</div>`,
        hint: `分組後因式分解。`,
        solution: `C (80%)<p><iframe src="https://www.youtube.com/embed/1XvIMJAcsOo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q04",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `$\\dfrac{1}{3x+7} - \\dfrac{1}{3x-7} =$
<div class="q-mcopt">
A.\t$\\dfrac{14}{49-9x^2}$<br>
B.\t$\\dfrac{14}{9x^2-49}$<br>
C.\t$\\dfrac{6x}{49-9x^2}$<br>
D.\t$\\dfrac{6x}{9x^2-49}$
</div>`,
        hint: `通分後合併分子。`,
        solution: `A (74%)<p><iframe src="https://www.youtube.com/embed/k2KzaVyAHfc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q05",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `下列有關 $y=16-(x-6)^2$ 的圖像之敍述，何者正確？
<div class="q-mcopt">
A.\t該圖像與 $x$ 軸相交。 <br>
B.\t該圖像開口向上。 <br>
C.\t該圖像的 $y$ 截距為 $16$。 <br>
D.\t該圖像通過原點。 
</div>`,
        hint: `觀察頂點及開口方向。`,
        solution: `A (61%)<p><iframe src="https://www.youtube.com/embed/2bDWzoTUHTE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q06",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 3,
        content: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $3x+ay=b$ 及 $cx+y=d$。 下列何者正確？
<div class="q-mcms"><img src="img/2018dsep2q06.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$ac \\lt 3$
II.\t$ad \\lt b$
III.\t$bc \\lt 3d$
</div>
<div class="q-mcopt">
A.\t只有 II<br>
B.\t只有 III<br>
C.\t只有 I 及 II<br>
D.\t只有 I 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷斜率及截距關係。`,
        solution: `D (22%)<p><iframe src="https://www.youtube.com/embed/lp1ppWBtS64?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q07",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 1,
        content: `若 $\\mathrm{f}(x) = 3x^2 - 2x + 1$，則 $\\mathrm{f}(2m-1) =$
<div class="q-mcopt">
A.\t$6m^2 - 4m + 2$。 <br>
B.\t$6m^2 - 4m + 6$。 <br>
C.\t$12m^2 - 16m + 2$。 <br>
D.\t$12m^2 - 16m + 6$。 
</div>`,
        hint: `直接代入並展開。`,
        solution: `D (73%)<p><iframe src="https://www.youtube.com/embed/BUWxzXmejos?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q08",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: `設 $\\mathrm{g}(x) = x^8 + ax^7 + b$，其中 $a$ 及 $b$ 均為常數。 若 $\\mathrm{g}(x)$ 可被 $x-1$ 整除，求當 $\\mathrm{g}(x)$ 除以 $x+1$ 時的餘數。 
<div class="q-mcopt">
A.\t$0$<br>
B.\t$2a$<br>
C.\t$-2a$<br>
D.\t$-2a + 2$
</div>`,
        hint: `用因式定理求 $b$，再用餘式定理。`,
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/ZGoYVwQTdYo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q09",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `存款 $\\$100\\,000$，年利率 $2\\%$，年期 $3$ 年，複利計算，每月一結。 求利息準確至最接近的元。 
<div class="q-mcopt">
A.\t$\\$~6\\,000$<br>
B.\t$\\$~6\\,121$<br>
C.\t$\\$~6\\,176$<br>
D.\t$\\$~6\\,178$
</div>`,
        hint: `月利率為 $\\dfrac{1}{6}\\%$，共 $36$ 期。`,
        solution: `D (73%)<p><iframe src="https://www.youtube.com/embed/ymIqWTynNKU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q10",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: `設 $a$、$b$ 及 $c$ 均為非零的數。 若 $3a = 4b$ 及 $a:c = 2:5$，則 $\\dfrac{a+3b}{b+3c} =$
<div class="q-mcopt">
A.\t$\\dfrac{5}{3}$。 <br>
B.\t$\\dfrac{13}{33}$。 <br>
C.\t$\\dfrac{30}{53}$。 <br>
D.\t$\\dfrac{75}{38}$。 
</div>`,
        hint: `設比例後代入計算。`,
        solution: `B (72%)<p><iframe src="https://www.youtube.com/embed/pu0PlpPfy1k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q11",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `若 $w$ 隨 $u$ 的平方根正變且隨 $v$ 的平方反變，則下列何者必為常數？
<div class="q-mcopt">
A.\t$u^4 v w^2$<br>
B.\t$uv^4 w^2$<br>
C.\t$\\dfrac{v w^2}{u^4}$<br>
D.\t$\\dfrac{v^4 w^2}{u}$
</div>`,
        hint: `由 $w = k \\sqrt{u}/v^2$ 判斷。`,
        solution: `D (68%)<p><iframe src="https://www.youtube.com/embed/e1Uo2SK1ANg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q12",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $a_n$ 為某數列的第 $n$ 項。 若 $a_3 = 21$、$a_6 = 89$ 及對任意正整數 $n$，$a_{n+2} = a_n + a_{n+1}$，則 $a_1 =$
<div class="q-mcopt">
A.\t$8$。 <br>
B.\t$13$。 <br>
C.\t$34$。 <br>
D.\t$55$。 
</div>`,
        hint: `由遞推關係逆向求前幾項。`,
        solution: `A (62%)<p><iframe src="https://www.youtube.com/embed/KeRII-YE1SY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q13",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `$\\dfrac{1-2x}{3} \\ge x-3$  或  $4x+9<1$  的解為
<div class="q-mcopt">
A.\t$x<-2$。 <br>
B.\t$x>-2$。 <br>
C.\t$x \\le 2$。 <br>
D.\t$x \\ge 2$。 
</div>`,
        hint: `分別解兩個不等式再取聯集。`,
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/h-IfWXTQ3GQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q14",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `圖中，$ABCDEFGH$ 為八邊形，其中所有的量度均準確至最接近的 cm。 設 $x\\text{ cm}^2$ 為該八邊形的實際面積。 求 $x$ 值的範圍。 
<div class="q-mcopt"><img src="img/2018dsep2q14.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$13 < x < 23$<br>
B.\t$13 < x < 27$<br>
C.\t$17 < x < 23$<br>
D.\t$17 < x < 27$
</div><div style="clear: both;"></div>`,
        hint: `考慮各邊長誤差範圍後計算面積上下限。`,
        solution: `B (42%)<p><iframe src="https://www.youtube.com/embed/Mj477PJ8tm8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q15",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 1,
        content: `圖中，實心直立三角柱體的體積為
<div class="q-mcopt"><img src="img/2018dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$544\\text{ cm}^3$。 <br>
B.\t$600\\text{ cm}^3$。 <br>
C.\t$660\\text{ cm}^3$。 <br>
D.\t$720\\text{ cm}^3$。 
</div><div style="clear: both;"></div>`,
        hint: `底面積乘高。`,
        solution: `D (83%)<p><iframe src="https://www.youtube.com/embed/aQBSYScgtQA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q16",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一平行四邊形。 $E$ 為 $BC$ 上的一點使得 $BE:EC = 5:3$。 $AE$ 與 $BD$ 相交於點 $F$。 若 $\\Delta ABF$ 的面積為 $120\\text{ cm}^2$，則四邊形 $CDFE$ 的面積為
<div class="q-mcopt"><img src="img/2018dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$237\\text{ cm}^2$。 <br>
B.\t$307\\text{ cm}^2$。 <br>
C.\t$312\\text{ cm}^2$。 <br>
D.\t$429\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與底的比例關係。`,
        solution: `A (39%)<p><iframe src="https://www.youtube.com/embed/MX0MKFwOfpM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q17",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 3,
        content: `圖中，$O$ 為扇形 $OABCD$ 的圓心。 $AD$ 與 $OC$ 互相垂直且相交於點 $E$。 $F$ 為 $AD$ 上的一點使得 $BF$ 垂直於 $AD$。 若 $AF = 9\\text{ cm}$、$DF = 39\\text{ cm}$ 及 $OE = 18\\text{ cm}$，則扇形 $OBC$ 的面積為
<div class="q-mcopt"><img src="img/2018dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48\\pi\\text{ cm}^2$。 <br>
B.\t$75\\pi\\text{ cm}^2$。 <br>
C.\t$96\\pi\\text{ cm}^2$。 <br>
D.\t$150\\pi\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `先求半徑及圓心角。`,
        solution: `B (28%)<p><iframe src="https://www.youtube.com/embed/czU-VfOartA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q18",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 1,
        content: `圖中，$ABCD$ 為一菱形。 $E$ 及 $F$ 分別為 $AB$ 及 $AD$ 上的點使得 $AE = AF$ 及 $\\angle ECF = 42^\\circ$。 若 $\\angle BAD = 110^\\circ$，則 $\\angle BEC =$
<div class="q-mcopt"><img src="img/2018dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$70^\\circ$。 <br>
B.\t$76^\\circ$。 <br>
C.\t$80^\\circ$。 <br>
D.\t$84^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用菱形及等腰三角形性質。`,
        solution: `B (78%)<p><iframe src="https://www.youtube.com/embed/RJ-vLpFPgPU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q19",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 3,
        content: `圖中，$ABCDE$ 為一正五邊形。 $AD$ 與 $CE$ 相交於點 $F$。 下列何者正確？
<div class="q-mcms"><img src="img/2018dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$CD = CF$
II.\t$\\Delta ABF \\cong \\Delta CBF$
III.\t$\\angle AFB + \\angle EAF = 90^\\circ$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `利用正五邊形的對稱及內角性質。`,
        solution: `D (23%)<p><iframe src="https://www.youtube.com/embed/nY9ZJandlnI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q20",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一正方形。 $E$ 為 $AB$ 的延線上的一點使得 $BE = 4\\text{ cm}$。 $BC$ 與 $DE$ 相交於點 $F$。 若 $EF = 5\\text{ cm}$，則 $DF =$
<div class="q-mcopt"><img src="img/2018dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$12\\text{ cm}$。 <br>
B.\t$15\\text{ cm}$。 <br>
C.\t$16\\text{ cm}$。 <br>
D.\t$20\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
        hint: `用相似三角形或畢氏定理。`,
        solution: `B (48%)<p><iframe src="https://www.youtube.com/embed/Ljq_wRm96iM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q21",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一梯形且 $\\angle ABC = \\angle BAD = 90^\\circ$。 $E$ 及 $F$ 均為 $AB$ 上的點使得 $E$ 與 $F$ 將 $AB$ 分成三等分。 下列何者必為正確？
<div class="q-mcms"><img src="img/2018dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$AF \\sin \\alpha = BE \\sin \\beta$
II.\t$CE \\cos \\alpha = DF \\cos \\beta$
III.\t$AD \\tan \\alpha = BC \\tan \\beta$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `在直角三角形中表達各邊關係。`,
        solution: `C (45%)<p><iframe src="https://www.youtube.com/embed/kdHUJg4JGas?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q22",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一圓。 $AD$ 的延線與 $BC$ 的延線相交於點 $E$。 已知 $BD = DE$、$\\angle BAC = 66^\\circ$ 及 $\\angle ABD = 30^\\circ$。 求 $\\angle CED$。 
<div class="q-mcopt"><img src="img/2018dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$20^\\circ$<br>
B.\t$28^\\circ$<br>
C.\t$36^\\circ$<br>
D.\t$42^\\circ$
</div><div style="clear: both;"></div>`,
        hint: `利用圓周角及等腰三角形性質。`,
        solution: `B (45%)<p><iframe src="https://www.youtube.com/embed/TPu6g2_3mKc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q23",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 1,
        content: `下面的圖形包含八個完全相同的正方形。 該圖形的旋轉對稱的折式數目為
<div class="q-mcopt"><img src="img/2018dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 35%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$2$。 <br>
B.\t$4$。 <br>
C.\t$6$。 <br>
D.\t$8$。 
</div><div style="clear: both;"></div>`,
        hint: `觀察圖形的旋轉對稱階數。`,
        solution: `B (75%)<p><iframe src="https://www.youtube.com/embed/QHv25o_3yI4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q24",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">點 $C$、點 $D$ 及點 $E$ 的極坐標分別為 $(16, 127^\\circ)$、$(12, 217^\\circ)$ 及 $(5, 307^\\circ)$。 求 $\\Delta CDE$ 的周界。</div><div class="q-mcopt" style="color: red;">
A.\t$54$<br>
B.\t$78$<br>
C.\t$126$<br>
D.\t$130$
</div>`,
        hint: `轉直角坐標後用距離公式。`,
        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/L-IAFK9H790?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q25",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: `直線 $L_1$ 及直線 $L_2$ 的方程分別為 $3x - y + 7 = 0$ 及 $12x - 4y - 11 = 0$。 設 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $L_1$ 的垂直距離等於由 $P$ 至 $L_2$ 的垂直距離。 求 $P$ 的軌跡的方程。 
<div class="q-mcopt">
A.\t$8x - 24y - 17 = 0$<br>
B.\t$8x - 24y + 17 = 0$<br>
C.\t$24x - 8y - 17 = 0$<br>
D.\t$24x - 8y + 17 = 0$
</div>`,
        hint: `軌跡是兩平行線的角平分線。`,
        solution: `D (41%)<p><iframe src="https://www.youtube.com/embed/0KPUIsHz9Ic?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q26",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `直線 $L_1$ 的方程為 $4x + 3y - 36 = 0$。 直線 $L_2$ 垂直於 $L_1$ 且與 $L_1$ 相交於 $y$ 軸上的一點。 求 $L_1$、$L_2$ 與 $x$ 軸圍成的區域的面積。 
<div class="q-mcopt">
A.\t$96$<br>
B.\t$108$<br>
C.\t$150$<br>
D.\t$192$
</div>`,
        hint: `先求 $L_2$ 方程再計算三角形面積。`,
        solution: `C (40%)<p><iframe src="https://www.youtube.com/embed/SA3P7iFy2Bk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q27",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `圓 $C$ 的方程為 $5x^2 + 5y^2 - 30x + 10y + 6 = 0$。 下列何者正確？
<div class="q-mcopt">
A.\t原點位於 $C$ 以內。 <br>
B.\t$C$ 位於第二象限內。 <br>
C.\t$C$ 的周長少於 $20$。 <br>
D.\t$C$ 的圓心的坐標為 $(15, -5)$。 
</div>`,
        hint: `先求圓心及半徑。`,
        solution: `C (43%)<p><iframe src="https://www.youtube.com/embed/aSOKsucBvI0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q28",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `從七張分別記有數字 $1$、$1$、$1$、$2$、$2$、$3$ 及 $4$ 的紙卡中，隨機同時抽出兩個數字。 求抽出數字之和為 $5$ 的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{5}{21}$<br>
B.\t$\\dfrac{5}{42}$<br>
C.\t$\\dfrac{5}{49}$<br>
D.\t$\\dfrac{10}{49}$
</div>`,
        hint: `列出所有可能組合後計算。`,
        solution: `A (50%)<p><iframe src="https://www.youtube.com/embed/pHU5BARdVto?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q29",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: `某 $10$ 本雜誌的頁數的平均值為 $132$。 若這 $10$ 本雜誌其中 $6$ 本的頁數的平均值為 $108$，則餘下 $4$ 本雜誌的頁數的平均值為
<div class="q-mcopt">
A.\t$148$。 <br>
B.\t$156$。 <br>
C.\t$168$。 <br>
D.\t$176$。 
</div>`,
        hint: `用加權平均列方程。`,
        solution: `C (78%)<p><iframe src="https://www.youtube.com/embed/oeHJf8FWxl8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q30",
        year: 2018,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 2,
        content: `下面的幹葉圖顯示 $20$ 名學生在一年內閱書數目的分佈。
        <table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: auto;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>幹（十位）</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>葉（個位）</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1    2    2    8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$    $a$</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0    2    4    5    5    7    8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$b$    $b$    9    9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0    8</td>
    </tr>
      </table>
若上述分佈的四分位數間距至多為 $25$，則下列何者必為正確？
<div class="q-mcms">
I.\t$5 \\le a \\le 9$
II.\t$0 \\le b \\le 4$
III.\t$1 \\le a - b \\le 6$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由四分位數間距限制求 $a$、$b$ 範圍。`,
        solution: `A (43%)<p><iframe src="https://www.youtube.com/embed/FjV0GjA_1j0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q31",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x)$ 為二次函數。 下圖可表示 $y=\\mathrm{f}(x)$ 的圖像及
<div class="q-mcopt"><img src="img/2018dsep2q31.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$y=-3\\mathrm{f}(x)$ 的圖像。 <br>
B.\t$y=\\mathrm{f}(-3x)$ 的圖像。 <br>
C.\t$y=-\\mathrm{f}(x+4)$ 的圖像。 <br>
D.\t$y=\\mathrm{f}(-x+11)$ 的圖像。 
</div><div style="clear: both;"></div>`,
        hint: `觀察圖像的反射及平移。`,
        solution: `C (66%)<p><iframe src="https://www.youtube.com/embed/BoYVheqcEb0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q32",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `圖中所示為在同一直角坐标系上 $y=\\log_a x$ 的圖像及 $y=\\log_b x$ 的圖像，其中 $a$ 及 $b$ 均為正常數。 若一垂直線分別與 $y=\\log_a x$ 的圖像、$y=\\log_b x$ 的圖像及 $x$ 軸相交於點 $A$、點 $B$ 及點 $C$，則下列何者正確？
<div class="q-mcms"><img src="img/2018dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a>1$
II.\t$a>b$
III.\t$\\dfrac{AB}{BC} = \\log_a \\dfrac{b}{a}$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷底數大小及對數性質。`,
        solution: `C (34%)<p><iframe src="https://www.youtube.com/embed/UA2CUPfsw60?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q33",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `圖中，直線 $L$ 顯示 $\\log_4 x$ 與 $\\log_4 y$ 之間的關係。 已知 $L$ 通過點 $(1, 2)$ 及點 $(9, 6)$。 若 $y=kx^a$，則 $k=$
<div class="q-mcopt"><img src="img/2018dsep2q33.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{1}{2}$。 <br>
B.\t$\\dfrac{3}{2}$。 <br>
C.\t$2$。 <br>
D.\t$8$。 
</div><div style="clear: both;"></div>`,
        hint: `由斜率及截距求 $a$ 及 $k$。`,
        solution: `D (30%)<p><iframe src="https://www.youtube.com/embed/zbbCPkoNPGI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q34",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `考慮以下的不等式組：<br>
\t$\\begin{cases}
x-21 \\le 0 \\\\[1.2ex]
x-y-35 \\le 0 \\\\[1.2ex]
x+5y-91 \\le 0 \\\\[1.2ex]
3x+2y \\ge 0
\\end{cases}$<br>
設 $D$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $D$ 中的一點，則 $5x+6y+234$ 的最小值為
<div class="q-mcopt">
A.\t$45$。 <br>
B.\t$150$。 <br>
C.\t$178$。 <br>
D.\t$423$。 
</div>`,
        hint: `找出可行域頂點並代入目標函數。`,
        solution: `C (35%)<p><iframe src="https://www.youtube.com/embed/rR-F5dReFwQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q35",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `若某數列的首 $n$ 項之和為 $6n^2 - n$，則下列何者正確？
<div class="q-mcms">
I.\t$22$ 為該數列的其中一項。
II.\t該數列的第 $1$ 項為 $5$。
III.\t該數列為一等比數列。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `由和公式求通項後判斷。`,
        solution: `B (40%)<p><iframe src="https://www.youtube.com/embed/NPdm8WINxzM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q36",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `若 $m \\neq n$ 且 $2m^2 + 5m = 2n^2 + 5n = 14$，則 $(m+2)(n+2) =$
<div class="q-mcopt">
A.\t$-8$。 <br>
B.\t$2$。 <br>
C.\t$6$。 <br>
D.\t$16$。 
</div>`,
        hint: `$m$、$n$ 為二次方程的兩根。`,
        solution: `A (49%)<p><iframe src="https://www.youtube.com/embed/T6ALG0hfdnM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q37",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `$\\dfrac{2i^{12} + 3i^{13} + 4i^{14} + 5i^{15} + 6i^{16}}{1-i}$ 的實部為
<div class="q-mcopt">
A.\t$-3$。 <br>
B.\t$-1$。 <br>
C.\t$1$。 <br>
D.\t$3$。 
</div>`,
        hint: `利用 $i$ 的週期簡化後分實虛部。`,
        solution: `D (44%)<p><iframe src="https://www.youtube.com/embed/-GMj47S7WjE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q38",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `當 $0^\\circ \\le x < 360^\\circ$ 時，方程 $6\\cos^2 x = \\cos x + 5$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
        hint: `設 $t=\\cos x$ 後解二次方程並考慮範圍。`,
        solution: `B (41%)<p><iframe src="https://www.youtube.com/embed/pW-7GKV3EEw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q39",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 3,
        content: `圖中，$TA$ 為圓 $ABCD$ 在點 $A$ 的切線。 $CD$ 的延線與 $TA$ 的延線相交於點 $E$。 已知 $AB = CD$、$\\angle BAT = 24^\\circ$ 及 $\\angle AED = 72^\\circ$。 求 $\\angle ABC$。 
<div class="q-mcopt"><img src="img/2018dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$60^\\circ$<br>
B.\t$66^\\circ$<br>
C.\t$72^\\circ$<br>
D.\t$78^\\circ$
</div><div style="clear: both;"></div>`,
        hint: `利用切線與弦的夾角及等弦對等角。`,
        solution: `B (28%)<p><iframe src="https://www.youtube.com/embed/JGexpZ_wh8g?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q40",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle"],
        difficulty: 3,
        content: `已知 $a$ 為一正常數。 直線 $2x+5y=a$ 分別與 $x$ 軸及 $y$ 軸相交於點 $P$ 及點 $Q$。 設 $R$ 為 $y$ 軸上的一點使得 $\\Delta PQR$ 的垂心的 $x$ 坐標為 $10$。 求 $R$ 的 $y$ 坐標。 
<div class="q-mcopt">
A.\t$-25$<br>
B.\t$-4$<br>
C.\t$4$<br>
D.\t$25$
</div>`,
        hint: `利用垂心性質及垂直條件。`,
        solution: `A (20%)<p><iframe src="https://www.youtube.com/embed/iuDWqIhz8Wo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q41",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: `圖中，$ABCDEFGH$ 為一長方體。 設 $X$ 為 $DE$ 上的一點使得 $DX=9\\text{ cm}$ 及 $EX=4\\text{ cm}$。 將 $BX$ 與平面 $ABGF$ 間的交角記為 $\\theta$。 求 $\\cos\\theta$。 
<div class="q-mcopt"><img src="img/2018dsep2q41.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{3}{5}$<br>
B.\t$\\dfrac{4}{5}$<br>
C.\t$\\dfrac{8}{17}$<br>
D.\t$\\dfrac{15}{17}$
</div><div style="clear: both;"></div>`,
        hint: `用向量或投影求交角。`,
        solution: `D (35%)<p><iframe src="https://www.youtube.com/embed/8m-reQsYM0M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q42",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `某班有 $14$ 名男生及 $15$ 名女生。 若從該班中選出 $3$ 名相同性別的學生組成一隊，則可組成多少不同的隊？
<div class="q-mcopt">
A.\t$819$<br>
B.\t$3\\,654$<br>
C.\t$4\\,914$<br>
D.\t$165\\,620$
</div>`,
        hint: `分別計算全男及全女組合後相加。`,
        solution: `A (50%)<p><iframe src="https://www.youtube.com/embed/uDFn2CMD_EA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q43",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 3,
        content: `偉明及小麗輪流投擲一枚勻稱骰子，直至其中一人擲得點數「$1$」或「$6$」為止。 偉明首先投擲該骰子。 求偉明擲得點數「$6$」的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{6}$<br>
C.\t$\\dfrac{3}{10}$<br>
D.\t$\\dfrac{7}{10}$
</div>`,
        hint: `考慮偉明在第 1、3、5… 次擲得 6 的情況。`,
        solution: `C (26%)<p><iframe src="https://www.youtube.com/embed/6oMaCV0ineY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q44",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: `在某測驗，測驗得分的平均值為 $68$ 分。 文俊在該測驗得 $46$ 分且他的標準分為 $-2.2$。 若素珊在該測驗得 $52$ 分，則她的標準分為
<div class="q-mcopt">
A.\t$-2.5$。 <br>
B.\t$-1.6$。 <br>
C.\t$-0.6$。 <br>
D.\t$1.6$。 
</div>`,
        hint: `先求標準差再計算素珊標準分。`,
        solution: `B (78%)<p><iframe src="https://www.youtube.com/embed/WeS49FB4xfo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2018-DSE-MATH-CP2-Q45",
        year: 2018,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `某等差數列有 $49$ 項。 若該數列首 $7$ 項的方差為 $9$，則該數列最後 $7$ 項的方差為
<div class="q-mcopt">
A.\t$9$。 <br>
B.\t$18$。 <br>
C.\t$49$。 <br>
D.\t$81$。 
</div>`,
        hint: `等差數列等長子列的方差相等。`,
        solution: `A (51%)<p><iframe src="https://www.youtube.com/embed/LATlsi-gFm0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
