// 2024dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2024-DSE-MATH-CP2-Q01",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$(x+3y)^2 - (x-3y)^2 =$
<div class="q-mcopt">
A.\t$2x^2$。<br>
B.\t$6xy$。<br>
C.\t$12xy$。<br>
D.\t$2x^2 + 18y^2$。
</div>`,
        hint: `應用平方差公式或展開後簡化。`,
        solution: `C (86%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q02",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$\\dfrac{(2\\alpha)^3}{(4\\alpha^{-5})^{-1}} =$
<div class="q-mcopt">
A.\t$2\\alpha^8$。<br>
B.\t$32\\alpha^8$。<br>
C.\t$\\dfrac{2}{\\alpha^2}$。<br>
D.\t$\\dfrac{32}{\\alpha^2}$。
</div>`,
        hint: `先處理負指數，再合併同類項。`,
        solution: `D (78%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q03",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $k = \\dfrac{5}{2m} + n$，則 $m =$
<div class="q-mcopt">
A.\t$\\dfrac{5}{2(k-n)}$。<br>
B.\t$\\dfrac{5}{2(n-k)}$。<br>
C.\t$\\dfrac{2(k-n)}{5}$。<br>
D.\t$\\dfrac{2(n-k)}{5}$。
</div>`,
        hint: `先移項再倒數求解 $m$。`,
        solution: `A (89%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q04",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `$\\sqrt{333} =$
<div class="q-mcopt">
A.\t$18$（準確至最接近的整數）。<br>
B.\t$18.24$（準確至二位小數）。<br>
C.\t$18.248$（準確至三位有效數字）。<br>
D.\t$18.2482$（準確至四位小數）。
</div>`,
        hint: `計算 $\\sqrt{333}$ 的近似值並對照各選項的精確度。`,
        solution: `A (92%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q05",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: `2 個蘋果和 3 個檸檬的價錢為 $\\$38$。 若 3 個蘋果和 2 個檸檬的價錢為 $\\$47$，則 4 個蘋果和 7 個檸檬的價錢為
<div class="q-mcopt">
A.\t$\\$78$。<br>
B.\t$\\$80$。<br>
C.\t$\\$82$。<br>
D.\t$\\$84$。
</div>`,
        hint: `設未知數後解聯立方程。`,
        solution: `B (93%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q06",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 1,
        content: `若 $a$ 、 $b$ 及 $c$ 均為非零的常數使得 $4x^2+2ax+3a \\equiv x(4x+b)+2c$，則 $a:b:c=$
<div class="q-mcopt">
A.\t$2:4:3$。<br>
B.\t$3:4:2$。<br>
C.\t$4:6:3$。<br>
D.\t$6:4:3$。
</div>`,
        hint: `展開右邊並比較係數。`,
        solution: `A (77%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q07",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $m$ 為一常數。 解方程 $x^2-3x=(m-1)^2-3(m-1)$。
<div class="q-mcopt">
A.\t$x=m-1$ 或 $x=m-4$<br>
B.\t$x=m-1$ 或 $x=4-m$<br>
C.\t$x=1-m$ 或 $x=m-4$<br>
D.\t$x=1-m$ 或 $x=4-m$
</div>`,
        hint: `移項後因式分解。`,
        solution: `B (46%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q08",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $\\mathrm{g}(x)=(x+1)(x+a)$，其中 $a$ 為一常數。若 $\\mathrm{g}(1)=\\mathrm{g}(2)$，則 $\\mathrm{g}(a)=$
<div class="q-mcopt">
A.\t$-4$。<br>
B.\t$0$。<br>
C.\t$12$。<br>
D.\t$24$。
</div>`,
        hint: `先由 $\\mathrm{g}(1)=\\mathrm{g}(2)$ 求 $a$，再代入。`,
        solution: `D (54%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q09",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x)=x^3+kx^2+5x+10$，其中 $k$ 為一常數。 若 $\\mathrm{f}(x)$ 可被 $x+k$ 整除，求當 $\\mathrm{f}(x)$ 除以 $x+1$ 時的餘數。
<div class="q-mcopt">
A.\t$-2$<br>
B.\t$2$<br>
C.\t$6$<br>
D.\t$18$
</div>`,
        hint: `用因式定理求 $k$，再用餘式定理求餘數。`,
        solution: `C (67%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q10",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `$\\dfrac{1-x}{2} \\ge 4$  或  $7+5x \\le -3$ 的解為
<div class="q-mcopt">
A.\t$x \\le -7$。<br>
B.\t$x \\le -2$。<br>
C.\t$-7 \\le x \\le -2$。<br>
D.\t$x \\le -7$  或  $x \\ge -2$。
</div>`,
        hint: `分別解兩個不等式再取聯集。`,
        solution: `B (71%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q11",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `在某校，40% 學生為女生且 $\\beta\\%$ 女生為外地生。 已知該校中 30% 男生為外地生。 在該校，外地生人數與女生人數相等。 求 $\\beta$。
<div class="q-mcopt">
A.\t$20$<br>
B.\t$45$<br>
C.\t$55$<br>
D.\t$80$
</div>`,
        hint: `設總人數後列方程求解。`,
        solution: `C (58%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q12",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: `某汽車以平均速率 $60$ km/h 行駛 $18$ 分鐘，該汽車然後以平均速率 $40$ km/h 行駛 $27$ 分鐘。 該汽車在整段行程的平均速率為
<div class="q-mcopt">
A.\t$48$ km/h。<br>
B.\t$50$ km/h。<br>
C.\t$52$ km/h。<br>
D.\t$54$ km/h。
</div>`,
        hint: `先求總距離及總時間。`,
        solution: `A (73%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q13",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $z$ 隨 $x$ 的平方正變且隨 $y$ 反變。 若 $x$ 增加 $20\\%$ 且 $y$ 減少 $20\\%$，則 $z$
<div class="q-mcopt">
A.\t增加 $20\\%$。<br>
B.\t減少 $20\\%$。<br>
C.\t增加 $80\\%$。<br>
D.\t減少 $80\\%$。
</div>`,
        hint: `寫出 $z = k\\dfrac{x^2}{y}$ 後計算新舊比值。`,
        solution: `C (74%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q14",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `下列有關 $y = 2(6-x)^2 - 7$ 的圖像之敍述，何者正確？
<div class="q-mcopt">
A.\t該圖像開口向上。<br>
B.\t該圖像與 $x$ 軸沒有相交。<br>
C.\t該圖像的 $y$ 截距為 $-7$。<br>
D.\t該圖像通過點 $(-6, -7)$。
</div>`,
        hint: `觀察二次項係數及頂點位置。`,
        solution: `A (66%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q15",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `若某扇形的弧長及面積分別為 $8\\pi$ cm 及 $80\\pi$ cm$^2$，則該扇形的角為
<div class="q-mcopt">
A.\t$36^\\circ$。<br>
B.\t$45^\\circ$。<br>
C.\t$60^\\circ$。<br>
D.\t$72^\\circ$。
</div>`,
        hint: `由弧長及面積公式求半徑及圓心角。`,
        solution: `D (68%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q16",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `一直立圓柱體的高與一直立圓錐體的高之比為 $32:15$，而該圓柱體的體積與該圓錐體的體積之比為 $10:9$。 若該圓柱體的底半徑為 $25$ cm，則該圓錐體的底半徑為
<div class="q-mcopt">
A.\t$20$ cm。<br>
B.\t$24$ cm。<br>
C.\t$48$ cm。<br>
D.\t$60$ cm。
</div>`,
        hint: `利用體積比及高之比求半徑比。`,
        solution: `D (54%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q17",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一正方形。 設 $M$ 為 $BC$ 的中點。 $E$ 為 $AD$ 上的一點使得 $AE:ED = 3:1$。 $F$ 為 $BC$ 的延線上的一點使得 $EF//AM$。 $CD$ 與 $EF$ 相交於點 $G$ 而 $AM$ 與 $BG$ 相交於點 $H$。 若 $\\triangle BMH$ 的面積為 $4$ cm$^2$，則梯形 $AEGH$ 的面積為
<div class="q-mcopt">
A.\t$12$ cm$^2$。<br>
B.\t$33$ cm$^2$。<br>
C.\t$39$ cm$^2$。<br>
D.\t$45$ cm$^2$。
</div>`,
        hint: `利用相似三角形或面積比關係。`,
        solution: `C (35%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q18",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 1,
        content: `圖中，$ABC$ 為一直線。 已知 $AD = 37$ cm 、 $BC = 5$ cm 、 $BD = 12$ cm 、 $CD = 13$ cm 及 $CE = 9$ cm。 若 $\\angle ACE = 90^\\circ$，求四邊形 $ADCE$ 的周界。
<div class="q-mcopt">
A.\t$76$ cm<br>
B.\t$90$ cm<br>
C.\t$100$ cm<br>
D.\t$180$ cm
</div>`,
        hint: `先用畢氏定理求 $AC$ 及 $AE$。`,
        solution: `C (82%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q19",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `根據圖中所示，下列何者必為正確？
<div class="q-mcopt">
A.\t$p+q-r=90^\\circ$<br>
B.\t$p-r+s=180^\\circ$<br>
C.\t$p+q-r+s=270^\\circ$<br>
D.\t$p+q+r-s=540^\\circ$
</div>`,
        hint: `利用多邊形內角和及直線上的角。`,
        solution: `D (51%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q20",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `若一正多邊形的內角和為 $900^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t該多邊形的對角線數目為 $7$。
II.\t該多邊形的旋轉對稱的折式數目為 $7$。
III.\t該多邊形的反射對稱軸的數目為 $7$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `先求邊數 $n$，再判斷對稱性質。`,
        solution: `D (46%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q21",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一菱形。 將 $AC$ 與 $BD$ 的交點記為 $E$。 設 $F$ 為一點使得 $BH//EF$ 且 $CFHG$ 為一長方形，其中 $G$ 及 $H$ 分別為 $AC$ 的延線及 $BC$ 的延線上的點。 將 $CD$ 與 $EF$ 的交點記為 $I$。 下列何者必為正確？
<div class="q-mcms">
I.\t$CI=FI$
II.\t$\\angle ABE=\\angle GCH$
III.\t$\\Delta ADE \\cong \\Delta HCF$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `利用菱形及長方形的性質。`,
        solution: `B (36%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q22",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$ABCDE$ 為一圓。 $AC$ 及 $BE$ 均為該圓的直徑。 設 $P$ 為 $AC$ 與 $BD$ 的交點。 若 $\\angle ABE = 46^\\circ$ 及 $\\angle DBE = 16^\\circ$，則 $\\angle APD =$
<div class="q-mcopt">
A.\t$104^\\circ$。<br>
B.\t$108^\\circ$。<br>
C.\t$120^\\circ$。<br>
D.\t$135^\\circ$。
</div>`,
        hint: `利用直徑所對的圓周角及圓心角性質。`,
        solution: `B (64%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q23",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，$ABC$ 為一直線。 $\\dfrac{BC}{AD} =$
<div class="q-mcopt">
A.\t$\\dfrac{\\sin \\theta}{\\tan \\phi}$。<br>
B.\t$\\dfrac{\\tan \\phi}{\\sin \\theta}$。<br>
C.\t$\\dfrac{\\cos \\theta}{\\tan \\phi}$。<br>
D.\t$\\dfrac{\\tan \\phi}{\\cos \\theta}$。
</div>`,
        hint: `在直角三角形中表達各邊。`,
        solution: `A (56%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q24",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `點 $U$ 的坐標為 $(-3, -8)$。 $U$ 繞原點逆時針方向旋轉 $90^\\circ$ 至點 $V$，然後 $V$ 對直線 $x=2$ 作反射至點 $W$。 求 $W$ 的 $x$ 坐標。
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-3$<br>
C.\t$7$<br>
D.\t$12$
</div>`,
        hint: `先作旋轉再作反射。`,
        solution: `A (58%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q25",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: `點 $A$ 及點 $B$ 的坐標分別為 $(-3,1)$ 及 $(-7,-5)$。 若 $P$ 為直線 $x-y+13=0$ 上的一點使得 $AP=PB$，則 $P$ 的 $y$ 坐標為
<div class="q-mcopt">
A.\t$-11$。<br>
B.\t$-2$。<br>
C.\t$2$。<br>
D.\t$11$。
</div>`,
        hint: `$AP=PB$ 表示 $P$ 在 $AB$ 的垂直平分線上。`,
        solution: `C (39%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q26",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `求常數 $k$ 使得直線 $6x-8y=7k$ 與直線 $kx+12y=5$ 互不相交。
<div class="q-mcopt">
A.\t$-16$<br>
B.\t$-9$<br>
C.\t$9$<br>
D.\t$16$
</div>`,
        hint: `兩直線平行時斜率相等。`,
        solution: `B (54%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q27",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `將圓 $3x^2+3y^2-6x+12y-4=0$ 記為 $C$。 下列何者正確？
<div class="q-mcms">
I.\t原點位於 $C$ 以內。
II.\t$C$ 的圓周少於 $16$。
III.\t由 $C$ 的圓心至 $x$ 軸的垂直距離為 $2$。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `先化成標準式求圓心及半徑。`,
        solution: `D (45%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q28",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `從六張分別記有數字 $1$、$2$、$3$、$4$、$5$ 及 $6$ 的紙卡中，隨機同時抽出兩個數字。 求抽出數字之積不小於 $12$ 的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{3}$<br>
B.\t$\\dfrac{2}{3}$<br>
C.\t$\\dfrac{7}{15}$<br>
D.\t$\\dfrac{8}{15}$
</div>`,
        hint: `列出所有組合後計算符合條件的數目。`,
        solution: `C (60%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q29",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的框線圖顯示一群小童在某遊戲中所獲代幣的數目的分佈。 若該分佈的分佈域為其四分位數間距的三倍，求 $m$。
<div class="q-mcopt">
A.\t$248$<br>
B.\t$275$<br>
C.\t$336$<br>
D.\t$360$
</div>`,
        hint: `由框線圖讀取 $Q_1$、$Q_3$ 及分佈域。`,
        solution: `B (87%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q30",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 2,
        content: `考慮以下正整數：
$5$ $5$ $5$ $6$ $9$ $9$ $11$ $13$ $m$ $n$
設 $p$ 、 $q$ 及 $r$ 分別為以上正整數的標準差、眾數及中位數。 若以上正整數的平均值為 $7$，則下列何者必為正確？
<div class="q-mcms">
I.\t$p>3$
II.\t$q=5$
III.\t$r<7$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由平均值求 $m+n$，再判斷眾數及中位數。`,
        solution: `D (55%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q31",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 1,
        content: `$u^2v^3w$、$u^3vw^2$ 及 $u^2v^3w^4$ 的 H.C.F. 為
<div class="q-mcopt">
A.\t$uvw$。<br>
B.\t$u^2vw$。<br>
C.\t$u^2v^3w^4$。<br>
D.\t$u^3v^3w^4$。
</div>`,
        hint: `取各變數的最低次冪。`,
        solution: `B (71%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q32",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `$\\text{AF000000000BC}_{16} =$
<div class="q-mcopt">
A.\t$175 \\times 16^{11} + 188$。<br>
B.\t$192 \\times 16^{11} + 205$。<br>
C.\t$175 \\times 16^{12} + 188$。<br>
D.\t$192 \\times 16^{12} + 205$。
</div>`,
        hint: `將十六進制最高位及最低位轉成十進制。`,
        solution: `A (63%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q33",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `若 $x = \\log_2 y - 2$ 及 $(\\log_2 y)^2 = 5 \\log_2 y + x - 7$，則 $y =$
<div class="q-mcopt">
A.\t$1$。<br>
B.\t$8$。<br>
C.\t$1$  或  $3$。<br>
D.\t$3$  或  $8$。
</div>`,
        hint: `設 $t=\\log_2 y$ 後解二次方程。`,
        solution: `B (48%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q34",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `圖中的圖像顯示 $y^3$ 與 $\\sqrt{x}$ 之間的線性關係。 若 $x=36$，則 $y=$
<div class="q-mcopt">
A.\t$-64$。<br>
B.\t$-16$。<br>
C.\t$-8$。<br>
D.\t$-4$。
</div>`,
        hint: `由圖像讀取斜率及截距後代入。`,
        solution: `D (54%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q35",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `設 $z=(a-5)i+\\dfrac{(a+2)i}{2+i}$。 若 $a$ 及 $z$ 均為實數，則 $a-z=$
<div class="q-mcopt">
A.\t$2$。<br>
B.\t$3$。<br>
C.\t$4$。<br>
D.\t$5$。
</div>`,
        hint: `先化簡分母，令虛部為零求 $a$。`,
        solution: `A (34%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q36",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `某數列的首 $n$ 項之和為 $n(2n+3)$。 下列何者正確？
<div class="q-mcms">
I.\t$14$ 為該數列的其中一項。
II.\t該數列的第 $n$ 項為 $4n+1$。
III.\t該數列為一等差數列。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由 $S_n$ 求通項 $a_n$。`,
        solution: `C (45%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q37",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `考慮以下的不等式組：
$$
\\begin{cases}
x - 2y \\le 1 \\\\
x + 4y \\le 13 \\\\
2x - y \\ge -1
\\end{cases}
$$
設 $R$ 為表示以上的不等式組的解之區域。 求常數 $c$ 使得 $5x - 2y + c$ 的最小值為 $22$，其中 $(x, y)$ 為 $R$ 中的一點。
<div class="q-mcopt">
A.\t$1$<br>
B.\t$23$<br>
C.\t$25$<br>
D.\t$29$
</div>`,
        hint: `找出可行域頂點並代入目標函數。`,
        solution: `C (41%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q38",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$TA$ 為圓 $ABCDE$ 在點 $A$ 的切線。 $BC$ 的延線與 $ED$ 的延線相交於點 $P$。 若 $\\angle ACB = 43^\\circ$、$\\angle DAT = 55^\\circ$ 及 $\\angle CPD = 29^\\circ$，則 $\\angle CBE =$
<div class="q-mcopt">
A.\t$64^\\circ$。<br>
B.\t$69^\\circ$。<br>
C.\t$72^\\circ$。<br>
D.\t$78^\\circ$。
</div>`,
        hint: `利用切線與弦的夾角及圓周角性質。`,
        solution: `B (47%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q39",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `當 $0^\\circ < \\theta \\le 360^\\circ$ 時，方程 $4\\cos^2\\theta - 3\\cos\\theta - 1 = 0$ 有多少個根？
<div class="q-mcopt">
A.\t$3$<br>
B.\t$4$<br>
C.\t$5$<br>
D.\t$6$
</div>`,
        hint: `因式分解後考慮 $\\cos\\theta$ 的範圍。`,
        solution: `A (49%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q40",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: `圖中，四面體 $PQRS$ 的底 $PQR$ 在水平地面上。 已知 $Q$ 鉛垂於 $S$ 之下。 若 $\\angle PQR = 90^\\circ$ 、 $\\angle QPS = 30^\\circ$ 及 $\\angle QRS = 45^\\circ$，則 $\\cos \\angle PRS =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$。<br>
B.\t$\\dfrac{3}{4}$。<br>
C.\t$\\dfrac{\\sqrt{2}}{4}$。<br>
D.\t$\\dfrac{\\sqrt{3}}{6}$。
</div>`,
        hint: `設邊長並用餘弦定理。`,
        solution: `C (46%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q41",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Four Centres of a Triangle"],
        difficulty: 3,
        content: `設 $G$ 、 $H$ 、 $I$ 及 $J$ 分別為 $\\Delta PQR$ 的形心、垂心、內心及外心。 若 $\\angle PQR = \\angle PRQ = 22^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t$G$ 位於 $\\Delta PQR$ 以內。
II.\t$H$ 位於 $\\Delta PQR$ 以外。
III.\t$I$、$J$ 與 $Q$ 共線。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `先判斷三角形類型（銳角／鈍角）。`,
        solution: `A (27%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q42",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `2 名經理與 7 名主任排成一隊。 若沒有經理相鄰而排，則可排成多少不同的隊？
<div class="q-mcopt">
A.\t$80~640$<br>
B.\t$141~120$<br>
C.\t$282~240$<br>
D.\t$362~880$
</div>`,
        hint: `先排主任再插入經理的空位。`,
        solution: `C (66%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q43",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `某測驗共設三題。 某學生答對第一題、答對第二題及答對第三題的概率分別為 $0.6$、$0.7$ 及 $0.8$。 求該學生在這測驗中答對至少 $1$ 題的概率。
<div class="q-mcopt">
A.\t$0.024$<br>
B.\t$0.188$<br>
C.\t$0.812$<br>
D.\t$0.976$
</div>`,
        hint: `用 $1$ 減去全部答錯的概率。`,
        solution: `D (59%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q44",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: `在某考試，考生的得分（以分為單位）如下：
$39$ $10$ $13$ $16$ $17$ $19$ $25$ $26$ $28$ $30$ $30$ $32$
下列何者正確？
<div class="q-mcms">
I.\t該些考生的考試得分的中位數為 $22$ 分。
II.\t每名考生在該考試的標準分均低於 $2$。
III.\t該些考生的考試得分的標準差超過 $8$ 分。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `先求中位數、平均值及標準差。`,
        solution: `D (73%)`
    },
    {
        id: "2024-DSE-MATH-CP2-Q45",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `若七個數 $x_1$、$x_2$、$x_3$、$x_4$、$x_5$、$x_6$ 及 $x_7$ 的方差為 $16$，則 $9x_1 - 5$ 、 $9x_2 - 5$ 、 $9x_3 - 5$ 、 $9x_4 - 5$ 、 $9x_5 - 5$ 、 $9x_6 - 5$ 及 $9x_7 - 5$ 這七個數的標準差為
<div class="q-mcopt">
A.\t$31$。<br>
B.\t$36$。<br>
C.\t$139$。<br>
D.\t$144$。
</div>`,
        hint: `方差乘以 $9^2$，標準差再乘 $9$。`,
        solution: `B (53%)`
    }
);
