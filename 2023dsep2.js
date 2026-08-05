// 2023dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2023-DSE-MATH-CP2-Q01",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $\\dfrac{a+5b}{7a+2b} = \\dfrac{1}{b+3}$，則 $a=$
<div class="q-mcopt">
A.\t$\\dfrac{4-b}{5b^2+13b}$。<br>
B.\t$\\dfrac{4+b}{5b^2+13b}$。<br>
C.\t$\\dfrac{5b^2+13b}{4-b}$。<br>
D.\t$\\dfrac{5b^2+13b}{4+b}$。
</div>`,
        hint: `交叉相乘後整理含 $a$ 的項。`,
        solution: `C (78%)

<iframe src="https://www.youtube.com/embed/oOzYNlK8iSo?autoplay=0&rel=0" title="解題影片" style="width: 100%; height: auto;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2023-DSE-MATH-CP2-Q02",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `$\\dfrac{2}{5-4x} - \\dfrac{1}{5+4x} =$
<div class="q-mcopt">
A.\t$\\dfrac{5+4x}{25-16x^2}$。<br>
B.\t$\\dfrac{5-4x}{25-16x^2}$。<br>
C.\t$\\dfrac{5+12x}{25-16x^2}$。<br>
D.\t$\\dfrac{5-12x}{25-16x^2}$。
</div>`,
        hint: `通分後合併分子。`,
        solution: `C (80%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q03",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$4^{n+2}~3^{2n+4} =$
<div class="q-mcopt">
A.\t$6^{2n+4}$。<br>
B.\t$6^{4n+8}$。<br>
C.\t$12^{2n+4}$。<br>
D.\t$12^{3n+6}$。
</div>`,
        hint: `先寫成相同底數或合併指數。`,
        solution: `A (72%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q04",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$2x^2 + xy - y^2 + 4x + 4y =$
<div class="q-mcopt">
A.\t$(x+y)(2x+y-4)$。<br>
B.\t$(x+y)(2x-y+4)$。<br>
C.\t$(x-y)(2x+y-4)$。<br>
D.\t$(x-y)(2x-y+4)$。
</div>`,
        hint: `分組因式分解或試根。`,
        solution: `B (87%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q05",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 1,
        content: `若 $c$ 及 $d$ 均為常數使得 $(x+2)(x+c)+12 \\equiv x(x+d)+6c(x+1)$，則 $d=$
<div class="q-mcopt">
A.\t$-13$。<br>
B.\t$-3$。<br>
C.\t$3$。<br>
D.\t$17$。
</div>`,
        hint: `展開兩邊並比較係數。`,
        solution: `A (70%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q06",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `$x-3<-5$  或  $\\dfrac{6-x}{4}<2$ 的解為
<div class="q-mcopt">
A.\t$x<-2$。<br>
B.\t$x>-2$。<br>
C.\t$x=-2$。<br>
D.\t$x \\neq -2$。
</div>`,
        hint: `分別解兩個不等式再取聯集。`,
        solution: `D (77%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q07",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `若 $y=73.8$（準確至三位有效數字），求 $y$ 值的範圍。
<div class="q-mcopt">
A.\t$73.7 \\le y < 73.9$<br>
B.\t$73.7 < y \\le 73.9$<br>
C.\t$73.75 \\le y < 73.85$<br>
D.\t$73.75 < y \\le 73.85$
</div>`,
        hint: `三位有效數字的誤差範圍為中間值的一半單位。`,
        solution: `C (82%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q08",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 1,
        content: `設 $\\mathrm{g}(x) = 13 - 5x^2$。 若 $\\alpha$ 為一常數，求 $\\mathrm{g}(1-3\\alpha)$。
<div class="q-mcopt">
A.\t$8 - 45\\alpha^2$<br>
B.\t$8 + 45\\alpha^2$<br>
C.\t$8 - 30\\alpha + 45\\alpha^2$<br>
D.\t$8 + 30\\alpha - 45\\alpha^2$
</div>`,
        hint: `直接代入並展開。`,
        solution: `D (75%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q09",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: `設 $\\mathrm{h}(x) = ax^6 + 16x^3 + b$，其中 $a$ 及 $b$ 均為常數。 若 $\\mathrm{h}(x)$ 可被 $2x-3$ 整除，求當 $\\mathrm{h}(x)$ 除以 $2x+3$ 時的餘數。
<div class="q-mcopt">
A.\t$-108$<br>
B.\t$-54$<br>
C.\t$54$<br>
D.\t$108$
</div>`,
        hint: `用因式定理求 $a$、$b$ 關係，再用餘式定理。`,
        solution: `A (43%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q10",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `下列有關 $y = 5 + (x-3)^2$ 的圖像之敍述，何者正確？
<div class="q-mcopt">
A.\t該圖像開口向下。<br>
B.\t該圖像的 $x$ 截距為 $3$。<br>
C.\t該圖像的 $y$ 截距為 $5$。<br>
D.\t該圖像通過點 $(3, 5)$。
</div>`,
        hint: `觀察頂點及開口方向。`,
        solution: `D (67%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q11",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某外套的標價較其成本高 $60\\%$。 該外套以其標價七五折售出並獲利 $\\$104$。 求該外套的成本。
<div class="q-mcopt">
A.\t$\\$416$<br>
B.\t$\\$520$<br>
C.\t$\\$728$<br>
D.\t$\\$832$
</div>`,
        hint: `設成本為 $x$，列方程求解。`,
        solution: `B (81%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q12",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某地圖的比例尺為 $1:50~000$。 若一機場的實際面積為 $10$ km$^2$，則這機場在該地圖上的面積為
<div class="q-mcopt">
A.\t$2\\text{ cm}^2$。<br>
B.\t$4\\text{ cm}^2$。<br>
C.\t$20\\text{ cm}^2$。<br>
D.\t$40\\text{ cm}^2$。
</div>`,
        hint: `面積比為長度比的平方。`,
        solution: `D (38%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q13",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `已知 $z$ 隨 $x$ 的平方及 $y$ 的立方根正變。 當 $x=12$ 及 $y=64$ 時，$z=36$。 當 $x=16$ 及 $y=729$ 時，$z=$
<div class="q-mcopt">
A.\t$108$。<br>
B.\t$144$。<br>
C.\t$162$。<br>
D.\t$216$。
</div>`,
        hint: `寫出 $z = k x^2 y^{1/3}$ 並求 $k$。`,
        solution: `B (66%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q14",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $a_n$ 為某數列的第 $n$ 項。 若 $a_6 = 23$ 、 $a_8 = 60$ 及對任意正整數 $n$，$a_{n+2} = a_{n+1} + a_n$，則 $a_3 =$
<div class="q-mcopt">
A.\t$4$。<br>
B.\t$5$。<br>
C.\t$9$。<br>
D.\t$14$。
</div>`,
        hint: `由遞推關係逆向求前幾項。`,
        solution: `B (62%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q15",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某實心正方體的邊長為 $60\\text{ cm}$。 一實心直立圓柱體的體積等於該正方體的體積，而該圓柱體的曲面面積等於該正方體的總表面面積。 求該圓柱體的底半徑。
<div class="q-mcopt">
A.\t$20\\text{ cm}$<br>
B.\t$30\\text{ cm}$<br>
C.\t$76\\text{ cm}$<br>
D.\t$172\\text{ cm}$
</div>`,
        hint: `設半徑及高，列聯立方程。`,
        solution: `A (50%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q16",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 3,
        content: `圖中，$AC$ 為圓 $ABCD$ 的一直徑而 $BD$ 及 $EF$ 均為圓 $BEDF$ 的直徑。 已知 $C$ 及 $E$ 均在 $AF$ 上。 設 $G$ 為 $AF$ 與 $BD$ 的交點。 若 $AG=30\\text{ cm}$ 及 $CG=10\\text{ cm}$，求陰影區域的面積準確至最接近的 $\\text{cm}^2$。
<div class="q-mcopt"><img src="img/2023dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$209\\text{ cm}^2$<br>
B.\t$367\\text{ cm}^2$<br>
C.\t$383\\text{ cm}^2$<br>
D.\t$540\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
        hint: `先求各圓半徑，再計算扇形或弓形面積。`,
        solution: `D (27%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q17",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$PQRS$ 為一平行四邊形。 設 $X$ 為 $PQ$ 上的一點。 將 $PR$ 與 $SX$ 的交點記為 $Y$。 若 $\\Delta PXY$ 的面積及四邊形 $QRYX$ 的面積分別為 $32\\text{ cm}^2$ 及 $58\\text{ cm}^2$，則 $\\Delta RSY$ 的面積為
<div class="q-mcopt"><img src="img/2023dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$40\\text{ cm}^2$。<br>
B.\t$50\\text{ cm}^2$。<br>
C.\t$58\\text{ cm}^2$。<br>
D.\t$72\\text{ cm}^2$。
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與底或高的比例關係。`,
        solution: `B (43%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q18",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `根據圖中所示，下列何者必為正確？
<div class="q-mcms"><img src="img/2023dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px;">
I.\t$a+b=90^\\circ$
II.\t$c+d=180^\\circ$
III.\t$a+b+c=d$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `利用直線上的角及三角形內角和。`,
        solution: `A (59%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q19",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `已知 $ABCD$ 為一菱形。 將 $AC$ 與 $BD$ 的交點記為 $E$。 下列何者必為正確？
<div class="q-mcms">
I.\t$AE = BE$
II.\t$\\dfrac{AE}{AC} = \\dfrac{BE}{BD}$
III.\t$AE^2 + BE^2 = CD^2$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `利用菱形對角線互相垂直平分的性質。`,
        solution: `C (54%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q20",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中所示為正方形 $ABCD$、正五邊形 $ADEFG$ 及正六邊形 $AGHIJK$。 求 $\\angle ABK$。
<div class="q-mcopt"><img src="img/2023dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$69^\\circ$<br>
B.\t$72^\\circ$<br>
C.\t$74^\\circ$<br>
D.\t$75^\\circ$
</div><div style="clear: both;"></div>`,
        hint: `計算各正多邊形的內角後相減。`,
        solution: `A (52%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q21",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$PQRS$ 為一長方形。 設 $T$ 為 $QR$ 上的一點使得 $\\angle PTS = 90^\\circ$。 $PQ$ 的延線與 $ST$ 的延線相交於點 $U$。 延長 $PT$ 至點 $V$ 使得 $RT = RV$。 下列何者必為正確？
<div class="q-mcopt"><img src="img/2023dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px;">
A.\t$RV // ST$<br>
B.\t$\\angle PTQ = \\angle RTS$<br>
C.\t$\\Delta PST \\sim \\Delta UTQ$<br>
D.\t$\\Delta PQT \\cong \\Delta TRS$
</div><div style="clear: both;"></div>`,
        hint: `利用直角及相似三角形條件。`,
        solution: `C (34%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q22",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中所示為圓內接四邊形 $RSTU$，其中 $ST = TU$。 $RS$ 的延線與 $UT$ 的延線相交於點 $V$ 而 $RU$ 的延線與 $ST$ 的延線相交於點 $W$。 若 $\\angle RWS = 32^\\circ$ 及 $\\angle RVU = 48^\\circ$，則 $\\angle RSU =$
<div class="q-mcopt"><img src="img/2023dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$65^\\circ$。<br>
B.\t$73^\\circ$。<br>
C.\t$80^\\circ$。<br>
D.\t$82^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用圓內接四邊形及等腰三角形性質。`,
        solution: `B (42%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q23",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一梯形且 $AD//BC$。 設 $E$ 為 $AD$ 的中點。 已知 $\\angle ABE = \\angle BCE = 90^\\circ$。 求 $\\dfrac{CE}{DE}$。
<div class="q-mcopt"><img src="img/2023dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 70%; margin-left: 15px; margin-bottom: 5px;">
A.\t$\\dfrac{1}{2}$<br>
B.\t$1$<br>
C.\t$\\tan\\alpha$<br>
D.\t$\\sin\\alpha\\cos\\alpha$
</div><div style="clear: both;"></div>`,
        hint: `在直角三角形中表達各邊長度。`,
        solution: `D (38%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q24",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">點 $P$ 的直角坐標為 $(\\sqrt{2}, -\\sqrt{2})$。 若 $P$ 繞原點逆時針方向旋轉 $90^\\circ$，則它的像的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(\\sqrt{2}, 45^\\circ)$。<br>
B.\t$(\\sqrt{2}, 225^\\circ)$。<br>
C.\t$(2, 45^\\circ)$。<br>
D.\t$(2, 225^\\circ)$。
</div>`,
        hint: `先旋轉直角坐標再轉極坐標。`,
        solution: `C (58%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q25",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `求常數 $a$ 使得直線 $2x+(a+3)y-5=0$ 與直線 $ax-4y+1=0$ 互相垂直。
<div class="q-mcopt">
A.\t$-6$<br>
B.\t$-5$<br>
C.\t$-2$<br>
D.\t$4$
</div>`,
        hint: `兩直線垂直時斜率乘積為 $-1$。`,
        solution: `A (56%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q26",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: `直線 $\\mathit{\\ell}$ 及直線 $L$ 的方程分別為 $9x+12y-37=0$ 及 $12x+16y+85=0$。 $\\mathit{\\ell}$ 與 $x$ 軸相交於點 $A$ 而 $L$ 與 $y$ 軸相交於點 $B$。 設 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $\\mathit{\\ell}$ 的垂直距離等於由 $P$ 至 $L$ 的垂直距離。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。 下列何者正確？
<div class="q-mcms">
I.\t$\\mathit{\\Gamma}$ 平行於 $L$。
II.\t$\\mathit{\\Gamma}$ 垂直於 $AB$。
III.\t$\\mathit{\\Gamma}$ 通過 $AB$ 的中點。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `軌跡是兩平行線的角平分線。`,
        solution: `B (41%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q27",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `圓 $C_1$ 及圓 $C_2$ 的方程分別為 $x^2+y^2+7x-4y+15=0$ 及 $2x^2+2y^2-2x-16y-17=0$。 設 $G_1$ 及 $G_2$ 分別為 $C_1$ 的圓心及 $C_2$ 的圓心。 將原點記為 $O$。 下列何者正確？
<div class="q-mcms">
I.\t$\\Delta OG_1G_2$ 為一等邊三角形。
II.\t線段 $OG_1$ 位於 $C_2$ 以內。
III.\t$C_1$ 與 $C_2$ 相交於兩相異點。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `先求兩圓圓心及半徑。`,
        solution: `C (51%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q28",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `一盒子內有五張分別記有數字 $1$、$2$、$3$、$4$ 及 $5$ 的紙卡，而另一盒子內有四張分別記有數字 $6$、$7$、$8$ 及 $9$ 的紙卡。 若從每一盒子中各隨機抽出一個數字，求抽出的兩個數字之積可被 $4$ 整除的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{3}{10}$<br>
C.\t$\\dfrac{7}{20}$<br>
D.\t$\\dfrac{9}{20}$
</div>`,
        hint: `分別考慮奇偶情況後計算概率。`,
        solution: `D (66%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q29",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的框線圖顯示在某年一些工程師的培訓時數的分佈。 求該分佈的上四分位數。<img src="img/2023dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;"><div class="q-mcopt">
A.\t$20$<br>
B.\t$40$<br>
C.\t$60$<br>
D.\t$70$
</div>`,
        hint: `從框線圖直接讀取 $Q_3$。`,
        solution: `C (76%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q30",
        year: 2023,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: `某公司有 $14$ 名全職僱員及 $56$ 名兼職僱員。 該些全職僱員的平均薪金為 $\\$31~530$，而該些兼職僱員的平均薪金為 $\\$21~525$。 求該公司這些僱員的平均薪金。
<div class="q-mcopt">
A.\t$\\$23~526$<br>
B.\t$\\$25~527$<br>
C.\t$\\$27~528$<br>
D.\t$\\$29~529$
</div>`,
        hint: `用加權平均計算。`,
        solution: `A (84%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q31",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `$1011001011001011_2=$
<div class="q-mcopt">
A.\t$11 \\times 2^{11} + 11 \\times 2^5 + 11$。<br>
B.\t$11 \\times 2^{12} + 11 \\times 2^6 + 11$。<br>
C.\t$11 \\times 2^{13} + 11 \\times 2^7 + 11$。<br>
D.\t$11 \\times 2^{14} + 11 \\times 2^8 + 11$。
</div>`,
        hint: `分組後轉成十進制。`,
        solution: `B (62%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q32",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: `$a^4b^2c$ 、 $a^3b^4c$  及  $a^2b^5c^2$  的 L.C.M. 為
<div class="q-mcopt">
A.\t$a^2b^2c$。<br>
B.\t$a^2b^2c^2$。<br>
C.\t$a^4b^5c$。<br>
D.\t$a^4b^5c^2$。
</div>`,
        hint: `取各變數的最高次冪。`,
        solution: `D (64%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q33",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `已知 $\\log_8 y$ 為 $\\log_4 x$ 的線性函數。 該線性函數的圖像在垂直軸上的截距及在水平軸上的截距分別為 $5$ 及 $3$。 下列何者必為正確？
<div class="q-mcopt">
A.\t$x^5y^2 = 8^{10}$<br>
B.\t$x^6y^5 = 8^{20}$<br>
C.\t$x^{10}y^3 = 8^{20}$<br>
D.\t$x^9y^{10} = 8^{30}$
</div>`,
        hint: `寫出線性關係並換底。`,
        solution: `A (39%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q34",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `若 $k$ 為一實數，則 $\\dfrac{i}{k-i} + \\dfrac{2}{k+i}$ 的實部為
<div class="q-mcopt">
A.\t$\\dfrac{2k+1}{k^2-1}$。<br>
B.\t$\\dfrac{2k-1}{k^2+1}$。<br>
C.\t$\\dfrac{k+2}{k^2-1}$。<br>
D.\t$\\dfrac{k-2}{k^2+1}$。
</div>`,
        hint: `分別化簡兩個分式後相加。`,
        solution: `B (63%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q35",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x) = 3x^2 + 18mx + 22m^2$，其中 $m$ 為一實常數。 下列有關 $y = -\\mathrm{f}(3x)$ 的圖像之敍述，何者必為正確？
<div class="q-mcms">
I.\t該圖像的頂點的 $x$ 坐標為 $m$。
II.\t該圖像的頂點的 $y$ 坐標為 $5m^2$。
III.\t該圖像的對稱軸的方程為 $x+m=0$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `先展開 $y=-\\mathrm{f}(3x)$ 再求頂點。`,
        solution: `D (32%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q36",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $\\mathrm{T}(n)$ 為一等差數列的第 $n$ 項。 若 $\\mathrm{T}(11)=83$ 及 $\\mathrm{T}(25)+\\mathrm{T}(30)=463$，求 $k$ 的最小值使得 $\\mathrm{T}(1)+\\mathrm{T}(2)+\\mathrm{T}(3)+\\cdots+\\mathrm{T}(k)>4\\times10^5$。
<div class="q-mcopt">
A.\t$299$<br>
B.\t$300$<br>
C.\t$944$<br>
D.\t$945$
</div>`,
        hint: `先求首項及公差，再解不等式。`,
        solution: `B (40%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q37",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 3,
        content: `考慮以下的不等式組：<br>
\t$\\begin{cases}
x+3 \\ge 0 \\\\[1.2ex]
2x+3y-12 \\le 0 \\\\[1.2ex]
5x-3y+12 \\le 0
\\end{cases}$<br>
設 $D$ 為表示以上的不等式組的解之區域。 求 $\\beta$ 值的範圍使得 $\\beta x+6y$ 的最大值為 $24$，其中 $(x, y)$ 為 $D$ 中的一點。
<div class="q-mcopt">
A.\t$\\beta \\le -10$<br>
B.\t$\\beta \\ge -10$<br>
C.\t$\\beta \\le 4$<br>
D.\t$\\beta \\ge 4$
</div>`,
        hint: `找出可行域頂點並代入目標函數。`,
        solution: `D (25%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q38",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$P$、$Q$ 及 $R$ 均為圓上的點。 $ST$、$TU$ 及 $SU$ 分別為該圓在 $P$、$Q$ 及 $R$ 的切線。 $RQ$ 的延線與 $ST$ 的延線相交於點 $V$。 若 $\\angle PSR = 34^\\circ$ 及 $\\angle QPT = 46^\\circ$，則 $\\angle PVQ =$
<div class="q-mcopt"><img src="img/2023dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 70%; margin-left: 15px; margin-bottom: 5px;">
A.\t$17^\\circ$。<br>
B.\t$22^\\circ$。<br>
C.\t$27^\\circ$。<br>
D.\t$28^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用切線與弦的夾角相等性質。`,
        solution: `C (50%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q39",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `直線 $hx+ky=6$ 與圓 $x^2+y^2-8x-4y-18=0$ 相交於點 $M$ 及點 $N$，其中 $h$ 及 $k$ 均為常數。 若 $MN$ 的中點的坐標為 $(1, 0)$，求 $k$。
<div class="q-mcopt">
A.\t$4$<br>
B.\t$6$<br>
C.\t$9$<br>
D.\t$12$
</div>`,
        hint: `弦的中點在圓心與弦垂直的直線上。`,
        solution: `A (31%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q40",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 3,
        content: `直立角錐體 $VABCD$ 的底為正方形 $ABCD$。 設 $\\theta$ 為 $\\Delta ABV$ 與 $\\Delta BCV$ 間的交角。 若 $AB : AV = 5 : 4$，則 $\\cos \\theta =$
<div class="q-mcopt">
A.\t$\\dfrac{-25}{39}$。<br>
B.\t$\\dfrac{-17}{33}$。<br>
C.\t$\\dfrac{-9}{16}$。<br>
D.\t$0$。
</div>`,
        hint: `設邊長並用餘弦定理求兩面角。`,
        solution: `A (28%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q41",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `直線 $L_1$ 及直線 $L_2$ 的方程分別為 $3x-4y+k=0$ 及 $4x+3y-k=0$，其中 $k$ 為一正常數。已知 $L_1$ 與 $x$ 軸相交於點 $P$。將 $L_1$ 與 $L_2$ 的交點記為 $Q$。若 $R$ 為 $L_2$ 上的一點使得 $\\Delta PQR$ 的內心在 $x$ 軸上，則 $R$ 的 $x$ 坐標為
<div class="q-mcopt">
A.\t$-7k$。<br>
B.\t$-k$。<br>
C.\t$k$。<br>
D.\t$7k$。
</div>`,
        hint: `利用內心坐標公式及垂直條件。`,
        solution: `C (33%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q42",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `某群有 $15$ 名教師。 若從該群中選出 $5$ 名教師組成一個有 $1$ 名主席及 $4$ 名委員的委員會，則可組成多少個不同的委員會？
<div class="q-mcopt">
A.\t$3~003$<br>
B.\t$15~015$<br>
C.\t$20~475$<br>
D.\t$360~360$
</div>`,
        hint: `先選 5 人再從中選主席。`,
        solution: `B (44%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q43",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `當某男生擲一飛鏢時，他擲中目標的概率為 $0.6$。 若這男生擲該飛鏢 $4$ 次，求他擲中目標至少 $2$ 次的概率。
<div class="q-mcopt">
A.\t$0.5248$<br>
B.\t$0.7056$<br>
C.\t$0.8208$<br>
D.\t$0.8464$
</div>`,
        hint: `用二項分布計算 $P(X\\ge 2)$。`,
        solution: `C (39%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q44",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 2,
        content: `下表顯示三名學生在某考試的得分（以分為單位）及其對應的標準分。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 4em;">
      <col style="width: 4em;">
      <col style="width: 4em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">得分（分）</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$46$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$x$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$86$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">標準分</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$-3$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$1$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$2$</td>
    </tr>
  </table>求 $x$。
<div class="q-mcopt">
A.\t$64$<br>
B.\t$66$<br>
C.\t$70$<br>
D.\t$78$
</div>`,
        hint: `用標準分公式建立方程求平均值及標準差。`,
        solution: `D (60%)`
    },
    {
        id: "2023-DSE-MATH-CP2-Q45",
        year: 2023,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `已知 $n$ 為一整數。 設 $u$、$v$ 及 $w$ 分別為 $\\{1-9n, 3-9n, 4-9n, 5-9n, 7-9n\\}$ 這組數的標準差、中位數及分佈域。 下列何者必為正確？
<div class="q-mcms">
I.\t$u = 2$
II.\t$v < 4$
III.\t$w > 6$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `平移不影響標準差及分佈域，中位數則隨平移改變。`,
        solution: `A (47%)`
    }
);
