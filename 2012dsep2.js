// 2012dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2012-DSE-MATH-CP2-Q01",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$\\dfrac{(2x^4)^3}{2x^5} =$
<div class="q-mcopt">
A.\t$3x^2$。<br>
B.\t$3x^7$。<br>
C.\t$4x^7$。<br>
D.\t$4x^{59}$。
</div>`,
        hint: `先處理指數再簡化。`,
        solution: `C (94%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q02",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$(4x+y)^2 - (4x-y)^2 =$
<div class="q-mcopt">
A.\t$0$。<br>
B.\t$2y^2$。<br>
C.\t$8xy$。<br>
D.\t$16xy$。
</div>`,
        hint: `應用平方差公式。`,
        solution: `D (75%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q03",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: `若 $p$ 及 $q$ 均為常數使得 $x^2 + p = (x+2)(x+q)+10$，則 $p =$
<div class="q-mcopt">
A.\t$-4$。<br>
B.\t$-2$。<br>
C.\t$6$。<br>
D.\t$10$。
</div>`,
        hint: `展開兩邊並比較係數。`,
        solution: `C (59%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q04",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `若 $k$ 為一常數使得 $x^3 + 4x^2 + kx - 12$ 被 $x+3$ 整除，則 $k=$
<div class="q-mcopt">
A.\t$-25$。<br>
B.\t$-1$。<br>
C.\t$1$。<br>
D.\t$17$。
</div>`,
        hint: `用因式定理求 $k$。`,
        solution: `B (76%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q05",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `若 $m+2n+6=2m-n=7$，則 $n=$
<div class="q-mcopt">
A.\t$-4$。<br>
B.\t$-1$。<br>
C.\t$3$。<br>
D.\t$11$。
</div>`,
        hint: `由兩個方程聯立求解。`,
        solution: `B (79%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q06",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `圖中所示為 $y=a(x+b)^2$ 的圖像，其中 $a$ 及 $b$ 均為常數。下列何者正確？
<div class="q-mcopt">
A.\t$a>0$ 及 $b>0$<br>
B.\t$a>0$ 及 $b<0$<br>
C.\t$a<0$ 及 $b>0$<br>
D.\t$a<0$ 及 $b<0$
</div>`,
        hint: `觀察開口方向及頂點位置。`,
        solution: `D (53%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q07",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `$15+4x<3$ 或 $9-2x>1$ 的解為
<div class="q-mcopt">
A.\t$x<-3$。<br>
B.\t$x>-3$。<br>
C.\t$x<4$。<br>
D.\t$x>4$。
</div>`,
        hint: `分別解兩個不等式再取聯集。`,
        solution: `C (59%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q08",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `在某公司，$37.5\\%$ 的僱員為女性。若 $60\\%$ 的男僱員及 $80\\%$ 的女僱員均已婚，則該公司中已婚僱員所佔的百分數為
<div class="q-mcopt">
A.\t$32.5\\%$。<br>
B.\t$45\\%$。<br>
C.\t$55\\%$。<br>
D.\t$67.5\\%$。
</div>`,
        hint: `設總人數後計算已婚比例。`,
        solution: `D (84%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q09",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: `若 $x$ 及 $y$ 均為非零的數使得 $\\dfrac{6x+5y}{3y-2x} = 7$，則 $x:y=$
<div class="q-mcopt">
A.\t$4:5$。<br>
B.\t$4:13$。<br>
C.\t$5:4$。<br>
D.\t$13:4$。
</div>`,
        hint: `交叉相乘後整理比例。`,
        solution: `A (75%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q10",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `已知 $y$ 的一部分隨 $x^2$ 正變，而另一部分隨 $x$ 反變。當 $x=1$ 時，$y=-4$；又當 $x=2$ 時，$y=5$。當 $x=-2$ 時，$y=$
<div class="q-mcopt">
A.\t$-11$。<br>
B.\t$-5$。<br>
C.\t$5$。<br>
D.\t$11$。
</div>`,
        hint: `設 $y = kx^2 + \\dfrac{m}{x}$ 後求常數。`,
        solution: `D (63%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q11",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: `小麗執行一項 $7$ 小時的打字工作。她在首 $3$ 小時及最後 $4$ 小時的平均打字速率分別為每分鐘 $63$ 字及每分鐘 $56$ 字。求她在該 $7$ 小時的平均打字速率。
<div class="q-mcopt">
A.\t每分鐘 $17$ 字<br>
B.\t每分鐘 $35$ 字<br>
C.\t每分鐘 $59$ 字<br>
D.\t每分鐘 $60$ 字
</div>`,
        hint: `用加權平均計算。`,
        solution: `C (79%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q12",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: `圖中，第 $1$ 個圖案包含 $1$ 粒點子。對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $n$ 粒點子所組成。求第 $8$ 個圖案的點子數目。
<div class="q-mcopt">
A.\t$22$<br>
B.\t$29$<br>
C.\t$36$<br>
D.\t$37$
</div>`,
        hint: `累加計算或求通項。`,
        solution: `B (74%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q13",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `$0.0322515 =$
<div class="q-mcopt">
A.\t$0.032$（準確至三位有效數字）。<br>
B.\t$0.0322$（準確至四位小數）。<br>
C.\t$0.03225$（準確至五位有效數字）。<br>
D.\t$0.032252$（準確至六位小數）。
</div>`,
        hint: `判斷有效數字及小數位。`,
        solution: `D (79%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q14",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `一條幼繩的長度量得 $25\\text{ m}$ 準確至最接近的 m。若將該繩分割為 $n$ 條使每條均量得 $5\\text{ cm}$ 準確至最接近的 cm，求 $n$ 的最大可取值。
<div class="q-mcopt">
A.\t$445$<br>
B.\t$566$<br>
C.\t$567$<br>
D.\t$650$
</div>`,
        hint: `考慮量度誤差範圍。`,
        solution: `B (50%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q15",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 1,
        content: `圖中，四邊形 $ABCD$ 的面積為
<div class="q-mcopt">
A.\t$144\\text{ cm}^2$。<br>
B.\t$160\\text{ cm}^2$。<br>
C.\t$178\\text{ cm}^2$。<br>
D.\t$288\\text{ cm}^2$。
</div>`,
        hint: `分割成三角形或梯形計算。`,
        solution: `A (90%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q16",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 1,
        content: `圖中，扇形 $OAB$ 及扇形 $OCD$ 的圓心均為 $O$。若 $\\widehat{AB} = 12\\pi\\text{ cm}$、$\\widehat{CD} = 16\\pi\\text{ cm}$ 及 $OA = 30\\text{ cm}$，則 $AC =$
<div class="q-mcopt">
A.\t$5\\text{ cm}$。<br>
B.\t$10\\text{ cm}$。<br>
C.\t$20\\text{ cm}$。<br>
D.\t$40\\text{ cm}$。
</div>`,
        hint: `由弧長求圓心角及半徑。`,
        solution: `B (82%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q17",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一平行四邊形。$E$ 及 $F$ 分別為 $AB$ 及 $CD$ 上的點。$AD$ 的延線與 $EF$ 的延線相交於 $G$。已知 $DF:FC = 3:4$ 及 $AD:DG = 1:1$。若 $\\triangle DFG$ 的面積為 $3\\text{ cm}^2$，則平行四邊形 $ABCD$ 的面積為
<div class="q-mcopt">
A.\t$12\\text{ cm}^2$。<br>
B.\t$14\\text{ cm}^2$。<br>
C.\t$18\\text{ cm}^2$。<br>
D.\t$21\\text{ cm}^2$。
</div>`,
        hint: `利用面積比與底的比例。`,
        solution: `B (43%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q18",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 1,
        content: `圖中，$D$ 為 $AC$ 上的一點使得 $BD$ 垂直於 $AC$。若 $BC = \\ell$，則 $AB =$
<div class="q-mcopt">
A.\t$\\dfrac{\\ell \\sin \\alpha}{\\cos \\beta}$。<br>
B.\t$\\dfrac{\\ell \\sin \\beta}{\\cos \\alpha}$。<br>
C.\t$\\dfrac{\\ell \\cos \\alpha}{\\sin \\beta}$。<br>
D.\t$\\dfrac{\\ell \\cos \\beta}{\\sin \\alpha}$。
</div>`,
        hint: `在直角三角形中表達比值。`,
        solution: `A (71%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q19",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `$\\dfrac{\\cos 60^\\circ}{1 - \\cos(90^\\circ - \\theta)} + \\dfrac{\\cos 240^\\circ}{1 - \\cos(270^\\circ - \\theta)} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{\\cos^2 \\theta}$<br>
B.\t$\\dfrac{\\cos \\theta}{\\tan \\theta}$<br>
C.\t$\\dfrac{\\tan \\theta}{\\cos \\theta}$<br>
D.\t$\\dfrac{1}{\\cos \\theta \\tan \\theta}$
</div>`,
        hint: `先化簡特殊角及誘導公式。`,
        solution: `C (51%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q20",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 1,
        content: `圖中，$O$ 為圓 $ABCD$ 的圓心。若 $\\angle BAO = 28^\\circ$、$\\angle BCD = 114^\\circ$ 及 $\\angle CDO = 42^\\circ$，則 $\\angle ABC =$
<div class="q-mcopt">
A.\t$90^\\circ$。<br>
B.\t$96^\\circ$。<br>
C.\t$100^\\circ$。<br>
D.\t$138^\\circ$。
</div>`,
        hint: `利用圓心角及圓周角性質。`,
        solution: `C (71%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q21",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Mensuration"],
        difficulty: 2,
        content: `圖中，$AB$ 為圓 $ABCD$ 的一直徑。若 $AB = 12\\text{ cm}$ 及 $CD = 6\\text{ cm}$，則陰影區域的面積為
<div class="q-mcopt">
A.\t$(12\\pi - 9)\\text{ cm}^2$。<br>
B.\t$(12\\pi + 9)\\text{ cm}^2$。<br>
C.\t$(12\\pi - 9\\sqrt{3})\\text{ cm}^2$。<br>
D.\t$(12\\pi + 9\\sqrt{3})\\text{ cm}^2$。
</div>`,
        hint: `用扇形及三角形面積計算。`,
        solution: `D (46%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q22",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `下列有關正 $12$ 邊形的敍述，何者正確？
<div class="q-mcms">
I.\t每一外角均為 $30^\\circ$。<br>
II.\t每一內角均為 $150^\\circ$。<br>
III.\t反射對稱軸的數目為 $6$。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `計算內外角及對稱軸。`,
        solution: `A (44%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q23",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `點 $P$ 的直角坐標為 $(-3, -3\\sqrt{3})$。若 $P$ 繞原點逆時針方向旋轉 $90^\\circ$，則它的像的極坐標為
<div class="q-mcopt">
A.\t$(3, 150^\\circ)$。<br>
B.\t$(3, 330^\\circ)$。<br>
C.\t$(6, 150^\\circ)$。<br>
D.\t$(6, 330^\\circ)$。
</div>`,
        hint: `先旋轉再轉極坐標。`,
        solution: `D (42%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q24",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 1,
        content: `若 $P$ 為直角坐標平面上的一動點使得 $P$ 與點 $(20, 12)$ 間之距離等於 $5$，則 $P$ 的軌跡為一
<div class="q-mcopt">
A.\t圓。<br>
B.\t正方形。<br>
C.\t拋物線。<br>
D.\t三角形。
</div>`,
        hint: `定點距離固定的軌跡是圓。`,
        solution: `A (72%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q25",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $ax+y=b$ 及 $cx+y=d$。下列何者正確？
<div class="q-mcms">
I.\t$a<0$<br>
II.\t$a<c$<br>
III.\t$b>d$<br>
IV.\t$ad>bc$
</div>
<div class="q-mcopt">
A.\t只有 I、II 及 III<br>
B.\t只有 I、II 及 IV<br>
C.\t只有 I、III 及 IV<br>
D.\t只有 II、III 及 IV
</div>`,
        hint: `由圖像判斷斜率及截距。`,
        solution: `C (40%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q26",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `圖中，圓的半徑及圓心的坐標分別為 $r$ 及 $(h, k)$。下列何者正確？
<div class="q-mcms">
I.\t$h+k>0$<br>
II.\t$r-h>0$<br>
III.\t$r-k>0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由圖像判斷圓心位置及半徑。`,
        solution: `A (56%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q27",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `$9\\bigstar\\blacklozenge$ 為三位數，其中 $\\bigstar$ 及 $\\blacklozenge$ 均為 $0$ 至 $9$（包括 $0$ 及 $9$）內的整數。求該三位數可被 $5$ 整除的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{7}{33}$<br>
C.\t$\\dfrac{20}{99}$<br>
D.\t$\\dfrac{19}{100}$
</div>`,
        hint: `可被 5 整除時末位為 0 或 5。`,
        solution: `A (50%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q28",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Statistical Graphs"],
        difficulty: 2,
        content: `下面的幹葉圖顯示一群文娛中心的會員的年歲的分佈。
<div style="overflow-x: auto; width: 100%; margin-bottom: 8px;"><table class="q-table" style="width: 100%; min-width: 300px;"><tr><td>幹（十位）</td><td>葉（個位）</td></tr><tr><td>$5$</td><td>$0$ $5$ $6$ $6$ $8$</td></tr><tr><td>$6$</td><td>$1$ $4$ $5$ $5$ $7$ $8$ $8$ $9$</td></tr><tr><td>$7$</td><td>$3$ $4$ $4$ $6$ $7$ $9$</td></tr><tr><td>$8$</td><td></td></tr><tr><td>$9$</td><td>$1$</td></tr></table></div>
從該群中隨機選出一名會員。求所選出的會員的年歲不小於 $74$ 的概率。
<div class="q-mcopt">
A.\t$0.2$<br>
B.\t$0.3$<br>
C.\t$0.7$<br>
D.\t$0.8$
</div>`,
        hint: `由幹葉圖讀取人數後計算。`,
        solution: `B (59%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q29",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion", "Statistical Graphs"],
        difficulty: 1,
        content: `下面的棒形圖顯示一群女生擁有指環的數目的分佈。求該分佈的標準差準確至二位小數。
<div class="q-mcopt">
A.\t$1.04$<br>
B.\t$1.16$<br>
C.\t$1.19$<br>
D.\t$2.09$
</div>`,
        hint: `由棒形圖求平均值後計算標準差。`,
        solution: `B (71%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q30",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: `考慮以下數據：
$$19 \\quad 10 \\quad 12 \\quad 12 \\quad 13 \\quad 13 \\quad 14 \\quad 15 \\quad 16 \\quad m \\quad n$$
若以上數據的平均值及中位數均為 $14$，則下列何者正確？
<div class="q-mcms">
I.\t$m \\ge 14$<br>
II.\t$n \\le 16$<br>
III.\t$m + n = 30$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由平均值及中位數求 $m$、$n$ 的條件。`,
        solution: `D (47%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q31",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: `三個數式的 H.C.F. 及 L.C.M. 分別為 $ab^2$ 及 $4a^4b^5c^6$。若第一個數式及第二個數式分別為 $2a^2b^4c$ 及 $4a^4b^2c^6$，則第三個數式為
<div class="q-mcopt">
A.\t$ab^2$。<br>
B.\t$ab^5$。<br>
C.\t$2ab^2c$。<br>
D.\t$2ab^5c$。
</div>`,
        hint: `由 H.C.F. 及 L.C.M. 求第三個數式。`,
        solution: `B (55%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q32",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `圖中的圖像顯示 $x$ 與 $\\log_3 y$ 之間的線性關係。若 $y=mn^x$，則 $n=$
<div class="q-mcopt">
A.\t$\\dfrac{1}{81}$。<br>
B.\t$\\dfrac{1}{9}$。<br>
C.\t$9$。<br>
D.\t$81$。
</div>`,
        hint: `由斜率求 $n$。`,
        solution: `C (43%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q33",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `$\\mathrm{AD}0000002012_{16} =$
<div class="q-mcopt">
A.\t$(10)16^{11} + (13)16^{10} + 8210$。<br>
B.\t$(10)16^{12} + (13)16^{11} + 131360$。<br>
C.\t$(11)16^{11} + (14)16^{10} + 8210$。<br>
D.\t$(11)16^{12} + (14)16^{11} + 131360$。
</div>`,
        hint: `直接轉成十進制表示。`,
        solution: `A (64%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q34",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x)$ 為二次函數。若 $y=\\mathrm{f}(x)$ 的圖像的頂點的坐標為 $(3,-4)$，則下列何者必為正確？
<div class="q-mcopt">
A.\t方程 $\\mathrm{f}(x)=0$ 的根均為整數。<br>
B.\t方程 $\\mathrm{f}(x)-3=0$ 的根均為有理數。<br>
C.\t方程 $\\mathrm{f}(x)+4=0$ 的根均為實數。<br>
D.\t方程 $\\mathrm{f}(x)+5=0$ 的根均為非實數。
</div>`,
        hint: `頂點在 $x$ 軸下方時方程有實根。`,
        solution: `C (49%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q35",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `$i^3(\\beta i - 3) =$
<div class="q-mcopt">
A.\t$\\beta + 3i$<br>
B.\t$\\beta - 3i$<br>
C.\t$-\\beta + 3i$<br>
D.\t$-\\beta - 3i$
</div>`,
        hint: `用 $i^3 = -i$ 簡化。`,
        solution: `A (55%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q36",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `圖中所示為一陰影區域（包括邊界在內）。若 $(h, k)$ 為陰影區域中的一點，則下列何者正確？
<div class="q-mcms">
I.\t$k \\ge 3$<br>
II.\t$h - k \\ge -3$<br>
III.\t$2h + k \\le 6$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由邊界直線判斷不等式。`,
        solution: `D (38%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q37",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $a_n$ 為一等差數列的第 $n$ 項。若 $a_{18} = 26$ 及 $a_{23} = 61$，則下列何者正確？
<div class="q-mcms">
I.\t$a_{14} < 0$<br>
II.\t$a_1 - a_2 < 0$<br>
III.\t$a_1 + a_2 + a_3 + \\cdots + a_{21} > 0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `先求公差後判斷各選項。`,
        solution: `A (43%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q38",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `下列何者可表示在同一直角坐标系上 $y=\\mathrm{f}(x)$ 的圖像及 $y=\\mathrm{f}(x-2)+1$ 的圖像？
<div class="q-mcopt">
A.\t（圖像 A）<br>
B.\t（圖像 B）<br>
C.\t（圖像 C）<br>
D.\t（圖像 D）
</div>`,
        hint: `水平右移 2 單位，垂直上移 1 單位。`,
        solution: `C (63%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q39",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `圖中所示為
<div class="q-mcopt">
A.\t$y=1+3\\cos\\dfrac{x^\\circ}{2}$ 的圖像。<br>
B.\t$y=1+3\\cos 2x^\\circ$ 的圖像。<br>
C.\t$y=4+3\\cos\\dfrac{x^\\circ}{2}$ 的圖像。<br>
D.\t$y=4+3\\cos 2x^\\circ$ 的圖像。
</div>`,
        hint: `由振幅及週期判斷。`,
        solution: `D (53%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q40",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: `圖中所示為一正四面體 $ABCD$。求平面 $ABC$ 與平面 $BCD$ 間之交角準確至最接近的度。
<div class="q-mcopt">
A.\t$48^\\circ$<br>
B.\t$53^\\circ$<br>
C.\t$60^\\circ$<br>
D.\t$71^\\circ$
</div>`,
        hint: `用正四面體二面角公式。`,
        solution: `D (30%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q41",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$PQ$ 為圓 $ABC$ 在 $O$ 的切線，其中 $O$ 為半圓 $PBQ$ 的圓心。已知 $BCP$ 為一直線。若 $\\angle BPQ = 12^\\circ$，則 $\\angle BAC =$
<div class="q-mcopt">
A.\t$18^\\circ$。<br>
B.\t$24^\\circ$。<br>
C.\t$36^\\circ$。<br>
D.\t$54^\\circ$。
</div>`,
        hint: `利用切線與弦的夾角及圓周角。`,
        solution: `C (47%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q42",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: `求 $k$ 值的範圍使得圓 $x^2 + y^2 + 2x - 4y - 13 = 0$ 與直線 $x - y + k = 0$ 相交於兩相異點。
<div class="q-mcopt">
A.\t$-9 < k < 3$<br>
B.\t$-3 < k < 9$<br>
C.\t$k < -9$ 或 $k > 3$<br>
D.\t$k < -3$ 或 $k > 9$
</div>`,
        hint: `將直線代入圓方程後令判別式 $> 0$。`,
        solution: `B (36%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q43",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `某戲劇學會由 $12$ 名男生及 $8$ 名女生組成。若從該學會中選出 $5$ 名學生為一隊參加比賽且該隊至少有一名女生，則可組成多少不同的隊？
<div class="q-mcopt">
A.\t$3960$<br>
B.\t$14712$<br>
C.\t$15448$<br>
D.\t$15504$
</div>`,
        hint: `總組合減去全是男生的組合。`,
        solution: `B (53%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q44",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `某盒子中有六個球，該六個球分別記有數字 $7$、$8$、$8$、$9$、$9$ 及 $9$。僅明從該盒子中隨機重複取球，每次只取出一個且不放回該盒子中，直至取出的數字是 $9$ 為止。求他需要取球恰好三次的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{6}$<br>
C.\t$\\dfrac{1}{8}$<br>
D.\t$\\dfrac{3}{20}$
</div>`,
        hint: `前兩次非 9，第三次為 9。`,
        solution: `D (56%)`
    },
    {
        id: "2012-DSE-MATH-CP2-Q45",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Change of Data"],
        difficulty: 2,
        content: `設 $m_1$、$r_1$ 及 $v_1$ 分別為某組數 $\\{x_1, x_2, x_3, \\dots, x_{100}\\}$ 的平均值、分佈域及方差。若 $m_2$、$r_2$ 及 $v_2$ 分別為 $\\{x_1, x_2, x_3, \\dots, x_{100}, m_1\\}$ 這組數的平均值、分佈域及方差，則下列何者必為正確？
<div class="q-mcms">
I.\t$m_1 = m_2$<br>
II.\t$r_1 = r_2$<br>
III.\t$v_1 = v_2$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `加入平均值不改變平均值及分佈域。`,
        solution: `A (36%)`
    }
);
