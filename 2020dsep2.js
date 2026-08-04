// 2020dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2020-DSE-MATH-CP2-Q01",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$\\dfrac{6x}{(3x^{-5})^{-2}} =$
<div class="q-mcopt">
A.\t$54x^8$。<br>
B.\t$\\dfrac{2x^8}{3}$。<br>
C.\t$\\dfrac{54}{x^9}$。<br>
D.\t$\\dfrac{2}{3x^9}$。
</div>`,
        hint: `先處理負指數再簡化。`,
        solution: `C (77%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q02",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $a(a+b)=2(b-a)$，則 $b=$
<div class="q-mcopt">
A.\t$\\dfrac{a^2+a}{2+a}$。<br>
B.\t$\\dfrac{a^2-2a}{2+a}$。<br>
C.\t$\\dfrac{a^2+2a}{2-a}$。<br>
D.\t$\\dfrac{a^2-a}{2-a}$。
</div>`,
        hint: `展開後整理含 $b$ 的項。`,
        solution: `C (85%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q03",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `$\\dfrac{5}{4k+3} - \\dfrac{2}{4k-3} =$
<div class="q-mcopt">
A.\t$\\dfrac{12k-21}{16k^2-9}$。<br>
B.\t$\\dfrac{12k+9}{16k^2-9}$。<br>
C.\t$\\dfrac{14k-21}{16k^2-9}$。<br>
D.\t$\\dfrac{14k+9}{16k^2-9}$。
</div>`,
        hint: `通分後合併分子。`,
        solution: `A (89%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q04",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$(3a+2b)(4a-5b) - a(6a+4b) =$
<div class="q-mcopt">
A.\t$(3a+2b)(2a-5b)$。<br>
B.\t$(3a+2b)(6a-5b)$。<br>
C.\t$(3a-2b)(2a+5b)$。<br>
D.\t$(3a-2b)(6a+5b)$。
</div>`,
        hint: `展開後重新因式分解。`,
        solution: `A (85%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q05",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x)=3x^2-x-2$。 若 $\\beta$ 為一常數，則 $\\mathrm{f}(1+\\beta)-\\mathrm{f}(1-\\beta) =$
<div class="q-mcopt">
A.\t$2\\beta$。<br>
B.\t$10\\beta$。<br>
C.\t$6\\beta^2-2$。<br>
D.\t$6\\beta^2-2\\beta$。
</div>`,
        hint: `直接代入並簡化。`,
        solution: `B (63%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q06",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `設 $\\mathrm{g}(x)=ax^3+4ax^2-24$，其中 $a$ 為一常數。 若 $x+2$ 為 $\\mathrm{g}(x)$ 的因式，則 $\\mathrm{g}(2) =$
<div class="q-mcopt">
A.\t$-96$。<br>
B.\t$0$。<br>
C.\t$3$。<br>
D.\t$48$。
</div>`,
        hint: `用因式定理求 $a$，再代入。`,
        solution: `D (75%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q07",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 1,
        content: `若 $h$ 及 $k$ 均為常數使得 $(x+h)(x+6) \\equiv (x+4)^2+k$，則 $k =$
<div class="q-mcopt">
A.\t$-28$。<br>
B.\t$-16$。<br>
C.\t$-4$。<br>
D.\t$2$。
</div>`,
        hint: `展開兩邊並比較係數。`,
        solution: `C (80%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q08",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $x+ay+b=0$ 及 $bx+y+c=0$。 下列何者正確？
<div class="q-mcms"><img src="img/2020dsep2q08.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$c<0$
II.\t$ab<1$
III.\t$ac \\lt b$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷斜率及截距。`,
        solution: `A (33%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q09",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `某玩具的成本較其售價低 $x\\%$。 售出該玩具後，盈利百分率為 $25\\%$。 求 $x$。 
<div class="q-mcopt">
A.\t$20$<br>
B.\t$25$<br>
C.\t$75$<br>
D.\t$80$
</div>`,
        hint: `設售價後列方程求解。`,
        solution: `A (46%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q10",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某高爾夫球場的實際面積為 $0.75\\text{ km}^2$。 若該球場在某地圖上的面積為 $300\\text{ cm}^2$，則該地圖的比例尺為
<div class="q-mcopt">
A.\t$1:250$。<br>
B.\t$1:5\\,000$。<br>
C.\t$1:62\\,500$。<br>
D.\t$1:25\\,000\\,000$。
</div>`,
        hint: `面積比為長度比的平方。`,
        solution: `B (32%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q11",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `已知 $w$ 隨 $u$ 的立方及 $v$ 的平方根正變。 當 $u=2$ 及 $v=4$ 時，$w=8$。 當 $u=4$ 及 $v=9$ 時，$w=$
<div class="q-mcopt">
A.\t$96$。<br>
B.\t$324$。<br>
C.\t$384$。<br>
D.\t$729$。
</div>`,
        hint: `寫出 $w = k u^3 \\sqrt{v}$ 並求 $k$。`,
        solution: `A (68%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q12",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: `圖中，第 $1$ 個圖案包含 $3$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $(2n+1)$ 粒點子所組成。 求第 $7$ 個圖案的點子數目。
        <img src="img/2020dsep2q12.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-mcopt">
A.\t$15$<br>
B.\t$27$<br>
C.\t$38$<br>
D.\t$51$
</div>`,
        hint: `寫出通項或累加計算。`,
        solution: `D (83%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q13",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `$5-4x<9$  及  $\\dfrac{2x-3}{7}>1$  的解為
<div class="q-mcopt">
A.\t$x<-1$。<br>
B.\t$x>-1$。<br>
C.\t$x<5$。<br>
D.\t$x>5$。
</div>`,
        hint: `分別解兩個不等式再取交集。`,
        solution: `D (79%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q14",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `圖中，$PQRST$ 為五邊形，其中所有的量度均準確至最接近的 cm。 設 $A\\text{ cm}^2$ 為該五邊形的實際面積。 求 $A$ 值的範圍。 
<div class="q-mcopt"><img src="img/2020dsep2q14.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$27.83 \\le A < 31.83$<br>
B.\t$44.75 \\le A < 60.75$<br>
C.\t$46.75 \\le A < 63.25$<br>
D.\t$48.25 \\le A < 64.75$
</div><div style="clear: both;"></div>`,
        hint: `考慮各邊長誤差範圍後計算面積上下限。`,
        solution: `B (41%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q15",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某扇形的角減少 $60\\%$，而它的半徑卻增加 $k\\%$。 若該扇形的弧長維持不變，求 $k$ 的值。 
<div class="q-mcopt">
A.\t$40$<br>
B.\t$60$<br>
C.\t$67$<br>
D.\t$150$
</div>`,
        hint: `弧長 $= r\\theta$，列比例方程。`,
        solution: `D (41%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q16",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `若一底半徑為 $5a\\text{ cm}$ 及高為 $7b\\text{ cm}$ 的直立圓柱體的體積為 $525\\text{ cm}^3$，則一底半徑為 $7a\\text{ cm}$ 及高為 $5b\\text{ cm}$ 的直立圓錐體的體積為
<div class="q-mcopt">
A.\t$175\\text{ cm}^3$。<br>
B.\t$245\\text{ cm}^3$。<br>
C.\t$490\\text{ cm}^3$。<br>
D.\t$735\\text{ cm}^3$。
</div>`,
        hint: `由圓柱體積求 $a^2b$，再代入圓錐公式。`,
        solution: `B (39%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q17",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$P$ 及 $Q$ 均為 $OR$ 上的點而 $U$ 及 $T$ 均為 $OS$ 上的點使得 $OP = PQ = QR$ 且 $PU // QT // RS$。 梯形 $PQTU$ 的面積與梯形 $QRST$ 的面積之比為
<div class="q-mcopt"><img src="img/2020dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$1:2$。<br>
B.\t$2:3$。<br>
C.\t$3:5$。<br>
D.\t$4:9$。
</div><div style="clear: both;"></div>`,
        hint: `利用相似及面積比與底的平方關係。`,
        solution: `C (48%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q18",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一平行四邊形。 設 $E$ 為 $AD$ 上的一點使得 $AE:ED = 2:5$。 延長 $CB$ 至點 $F$ 使得 $BF = DE$。 將 $AB$ 與 $EF$ 的交點記為 $G$。 已知 $BD$ 與 $CG$ 相交於點 $H$。 若 $\\Delta AEG$ 的面積為 $48\\text{ cm}^2$，則 $\\Delta CDH$ 的面積為
<div class="q-mcopt"><img src="img/2020dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$98\\text{ cm}^2$。 <br>
B.\t$343\\text{ cm}^2$。 <br>
C.\t$420\\text{ cm}^2$。 <br>
D.\t$588\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與底或高的比例。`,
        solution: `B (43%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q19",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `根據圖中所示，下列何者必為正確？
<div class="q-mcms"><img src="img/2020dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$u-v+w=0^\\circ$
II.\t$u+v-w=180^\\circ$
III.\t$u+v+w=450^\\circ$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div><div style="clear: both;"></div>`,
        hint: `利用直線上的角及三角形內角和。`,
        solution: `B (56%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q20",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$ABC$ 為一等邊三角形及 $CDE$ 為一等腰三角形且 $CD=CE$。 若 $\\angle DCE = 78^\\circ$ 及 $\\angle ADC = \\angle CAD = 40^\\circ$，則 $\\angle CBE =$
<div class="q-mcopt"><img src="img/2020dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$14^\\circ$。<br>
B.\t$19^\\circ$。<br>
C.\t$24^\\circ$。<br>
D.\t$29^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用等邊及等腰三角形性質。`,
        solution: `D (70%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q21",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Pythagoras Theorem"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一長方形。 設 $E$ 為 $AD$ 上的一點使得 $BE = 8\\text{ cm}$ 及 $CE = 15\\text{ cm}$。 若 $BC = 17\\text{ cm}$，求長方形 $ABCD$ 的面積。 
<div class="q-mcopt"><img src="img/2020dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$60\\text{ cm}^2$<br>
B.\t$68\\text{ cm}^2$<br>
C.\t$120\\text{ cm}^2$<br>
D.\t$136\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
        hint: `用畢氏定理求 $AE$ 及 $DE$。`,
        solution: `C (62%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q22",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$ABCDE$ 為一圓。 若 $AB = 10\\text{ cm}$ 、 $BC = 5\\text{ cm}$ 、 $\\angle ABC = 90^\\circ$ 及 $\\angle CED = 40^\\circ$，求 $CD$ 準確至最接近的 cm。 
<div class="q-mcopt"><img src="img/2020dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$5\\text{ cm}$<br>
B.\t$6\\text{ cm}$<br>
C.\t$7\\text{ cm}$<br>
D.\t$8\\text{ cm}$
</div><div style="clear: both;"></div>`,
        hint: `利用圓周角及正弦定律。`,
        solution: `C (37%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q23",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `某船位於燈塔以西 $50\\text{ km}$。 若該船沿 S$60^\\circ$E 方向移動，求該船與燈塔間的最短距離。 
<div class="q-mcopt">
A.\t$20\\text{ km}$<br>
B.\t$25\\text{ km}$<br>
C.\t$43\\text{ km}$<br>
D.\t$87\\text{ km}$
</div>`,
        hint: `畫出方位角後用正弦求最短距離。`,
        solution: `B (47%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q24",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">點 $P$ 向左平移 $4$ 單位至點 $Q$。 若 $Q$ 對 $y$ 軸的反射影像的坐標為 $(5, -1)$，則 $P$ 的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(1, 45^\\circ)$。<br>
B.\t$(1, 225^\\circ)$。<br>
C.\t$(\\sqrt{2}, 45^\\circ)$。<br>
D.\t$(\\sqrt{2}, 225^\\circ)$。
</div>`,
        hint: `先求 $Q$ 再求 $P$，最後轉極坐標。`,
        solution: `D (53%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q25",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 1,
        content: `設 $A$ 為直線 $9x+4y-7=0$ 與直線 $9x-4y+7=0$ 的交點。 若 $P$ 為直角坐標平面上的一動點使得 $P$ 與 $A$ 間的距離為 $8$，則 $P$ 的軌跡為一
<div class="q-mcopt">
A.\t圓。<br>
B.\t三角形。<br>
C.\t四邊形。<br>
D.\t正六邊形。
</div>`,
        hint: `定點定距離的軌跡是圓。`,
        solution: `A (70%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q26",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `直線 $L$ 的方程為 $kx+4y-2k=0$，其中 $k$ 為一常數。 若 $L$ 垂直於直線 $6x-9y+4=0$，求 $L$ 的 $y$ 截距。 
<div class="q-mcopt">
A.\t$-3$<br>
B.\t$-2$<br>
C.\t$2$<br>
D.\t$3$
</div>`,
        hint: `兩直線垂直時斜率乘積為 $-1$。`,
        solution: `D (52%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q27",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `圓 $C_1$ 及圓 $C_2$ 的方程分別為 $2x^2+2y^2+4x+8y-149=0$ 及 $x^2+y^2-8x-20y-53=0$。 下列何者正確？
<div class="q-mcms">
I.\t$C_1$ 的圓心在 $C_2$ 上。
II.\t$C_1$ 與 $C_2$ 的半徑相等。
III.\t$C_1$ 與 $C_2$ 相交於兩相異點。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `先求兩圓圓心及半徑。`,
        solution: `C (50%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q28",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `從四張分別記有數字 $3$、$5$、$7$ 及 $9$ 的紙卡中，隨機同時抽出兩個數字。 求抽出數字之積大於 $35$ 的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{3}$<br>
C.\t$\\dfrac{2}{3}$<br>
D.\t$\\dfrac{3}{8}$
</div>`,
        hint: `列出所有可能組合後計算。`,
        solution: `B (54%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q29",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 2,
        content: `下面的棒形圖顯示某些學生擁有原子筆的數目的分佈。 求該分佈的四分位數間距。 
<div class="q-mcopt"><img src="img/2020dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$1$<br>
B.\t$2$<br>
C.\t$4$<br>
D.\t$6$
</div><div style="clear: both;"></div>`,
        hint: `由棒形圖求 $Q_1$ 及 $Q_3$。`,
        solution: `A (69%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q30",
        year: 2020,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 2,
        content: `考慮以下整數：
$3$　$3$　$8$　$8$　$8$　$10$　$12$　$m$　$n$
設 $x$、$y$ 及 $z$ 分別為以上整數的中位數、平均值及眾數。 若以上整數的分佈域為 $9$，則下列何者必為正確？
<div class="q-mcms">
I.\t$x=8$
II.\t$y=8$
III.\t$z=8$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `由分佈域及中位數求 $m$、$n$ 的可能值。`,
        solution: `A (49%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q31",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `<div style="color: red;">$\\text{B00000000000030}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$10 \\times 2^{60} + 48$。<br>
B.\t$11 \\times 2^{60} + 48$。<br>
C.\t$10 \\times 2^{64} + 768$。<br>
D.\t$11 \\times 2^{64} + 768$。
</div>`,
        hint: `將十六進制轉成二進制或十進制。`,
        solution: `B (68%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q32",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `若方程 $(\\log_{\\pi}x)^2 - 10\\log_{\\pi}x + 24 = \\log_{\\pi}x$ 的根為 $\\alpha$ 及 $\\beta$，則 $\\alpha\\beta =$
<div class="q-mcopt">
A.\t$\\pi^{10}$。<br>
B.\t$\\pi^{11}$。<br>
C.\t$\\log_{\\pi}10$。<br>
D.\t$\\log_{\\pi}11$。
</div>`,
        hint: `設 $t=\\log_{\\pi}x$ 後解二次方程。`,
        solution: `B (40%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q33",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `圖中所示為在同一直角坐標系上 $y=a^x$ 的圖像及 $y=b^x$ 的圖像，其中 $a$ 及 $b$ 均為正常數。 若 $y=a^x$ 的圖像為 $y=b^x$ 的圖像對 $y$ 軸的反射影像，則下列何者正確？
<div class="q-mcms"><img src="img/2020dsep2q33.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a<1$
II.\t$b>1$
III.\t$ab=1$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `反射後 $a=1/b$。`,
        solution: `D (40%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q34",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `圖中的圖像顯示 $x^3$ 與 $\\sqrt{y}$ 之間的線性關係。 若 $x=2$，則 $y=$
<div class="q-mcopt"><img src="img/2020dsep2q34.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$3$。<br>
B.\t$8$。<br>
C.\t$9$。<br>
D.\t$33$。
</div><div style="clear: both;"></div>`,
        hint: `由圖像讀取斜率及截距。`,
        solution: `C (48%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q35",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `若 $a>0$，則下列何者為等差數列？
<div class="q-mcms">
I.\t$\\log a^{-3}$ ,  $\\log a$ ,  $\\log a^5$
II.\t$8-4a$ ,  $9-5a$ ,  $10-6a$
III.\t$\\cos(90-a)^\\circ$ ,  $\\cos 90^\\circ$ ,  $\\cos(90+a)^\\circ$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `檢查公差是否為常數。`,
        solution: `D (33%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q36",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `考慮以下的不等式組：<br>
\t$\\begin{cases}
0 \\le x \\le 2 \\\\[1.2ex]
2x + y + 3 \\ge 0 \\\\[1.2ex]
x + y + 1 \\le 0
\\end{cases}$<br>
設 $D$ 為表示以上的不等式組的解之區域。 求常數 $k$ 使得 $4x+3y+k$ 的最小值為 $24$，其中 $(x, y)$ 為 $D$ 中的一點。 
<div class="q-mcopt">
A.\t$25$<br>
B.\t$27$<br>
C.\t$37$<br>
D.\t$53$
</div>`,
        hint: `找出可行域頂點並代入目標函數。`,
        solution: `C (34%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q37",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `定義 $z_1 = \\dfrac{2+ki}{1+i}$ 及 $z_2 = \\dfrac{k+5i}{2-i}$，其中 $k$ 為一實數。 若 $z_1$ 的虛部等於 $z_2$ 的虛部，則 $z_1 - z_2 =$
<div class="q-mcopt">
A.\t$-20$。<br>
B.\t$0$。<br>
C.\t$3$。<br>
D.\t$10$。
</div>`,
        hint: `分別化簡 $z_1$、$z_2$ 後比較虛部。`,
        solution: `C (42%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q38",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 3,
        content: `圖中，$ABCDEF$ 為一直立三角柱體。 $P$ 為 $AE$ 上的一點。 若 $AB = AC = 12\\text{ cm}$ 、 $AP = 9\\text{ cm}$ 、 $EP = 5\\text{ cm}$ 及 $BD = 2k\\text{ cm}$，求 $\\Delta BDP$ 的面積。 
<div class="q-mcopt"><img src="img/2020dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\sqrt{(k^2-1)(196-k^2)}\\text{ cm}^2$<br>
B.\t$\\sqrt{(k^2-1)(196+k^2)}\\text{ cm}^2$<br>
C.\t$\\sqrt{(k^2+1)(196-k^2)}\\text{ cm}^2$<br>
D.\t$\\sqrt{(k^2+1)(196+k^2)}\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
        hint: `用向量或餘弦定理求三角形面積。`,
        solution: `A (29%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q39",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 3,
        content: `圖中，$ABC$ 及 $CDE$ 均為圓使得 $ADC$ 為一直線。 $PQ$ 為該兩圓在 $C$ 的公切線。 $AB$ 為圓 $CDE$ 在 $E$ 的切線。 若 $\\angle ADE = 100^\\circ$ 及 $\\angle BCQ = 35^\\circ$，則 $\\angle ABC =$
<div class="q-mcopt"><img src="img/2020dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$55^\\circ$。<br>
B.\t$65^\\circ$。<br>
C.\t$70^\\circ$。<br>
D.\t$80^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用切線與弦的夾角及圓周角。`,
        solution: `A (28%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q40",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 3,
        content: `某三角形的三邊的方程為 $4x+3y=24$ 、 $4x-3y=24$ 及 $x=a$，其中 $a$ 為一常數。 若該三角形的內心的 $x$ 坐標為 $31$，則 $a=$
<div class="q-mcopt">
A.\t$15$。<br>
B.\t$31$。<br>
C.\t$45$。<br>
D.\t$51$。
</div>`,
        hint: `利用內心坐標公式及邊長權重。`,
        solution: `D (23%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q41",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `求 $c$ 值的範圍使得圓 $x^2+y^2-6x+cy-7=0$ 與直線 $x-y+9=0$ 相交。 
<div class="q-mcopt">
A.\t$-56 \\le c \\le 8$<br>
B.\t$-8 \\le c \\le 56$<br>
C.\t$c \\le -56$  或  $c \\ge 8$<br>
D.\t$c \\le -8$  或  $c \\ge 56$
</div>`,
        hint: `將直線代入圓方程後令判別式 $\\ge 0$。`,
        solution: `D (33%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q42",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `$6$ 名男生與 $5$ 名女生排成一隊。 若沒有男生相鄰而排，則可排成多少不同的隊？
<div class="q-mcopt">
A.\t$86\\,400$<br>
B.\t$172\\,800$<br>
C.\t$213\\,444$<br>
D.\t$39\\,916\\,800$
</div>`,
        hint: `先排女生再插入男生。`,
        solution: `A (61%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q43",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `某箱子內有 $8$ 本中文書及 $7$ 本英文書。 若從該箱子中隨機同時抽出 $5$ 本書，求抽出至多 $3$ 本中文書的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{2}{11}$<br>
B.\t$\\dfrac{9}{11}$<br>
C.\t$\\dfrac{61}{143}$<br>
D.\t$\\dfrac{82}{143}$
</div>`,
        hint: `分情況計算中文書數目 $\\le 3$ 的組合。`,
        solution: `B (56%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q44",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 2,
        content: `在一測驗，某兩學生的測驗得分之差及標準分之差分別為 $30$ 分及 $6$。 在該測驗，測驗得分的標準差為
<div class="q-mcopt">
A.\t$5$ 分。<br>
B.\t$24$ 分。<br>
C.\t$25$ 分。<br>
D.\t$36$ 分。
</div>`,
        hint: `標準分差 $=$ 得分差 $/$ 標準差。`,
        solution: `A (44%)`
    },
    {
        id: "2020-DSE-MATH-CP2-Q45",
        year: 2020,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `六個數 $20a+3$ 、 $20a+5$ 、 $20a+9$ 、 $20a+11$ 、 $20a+15$ 及 $20a+17$ 的方差為
<div class="q-mcopt">
A.\t$5$。<br>
B.\t$10$。<br>
C.\t$25$。<br>
D.\t$20a+25$。
</div>`,
        hint: `平移不影響方差，計算離差平方平均。`,
        solution: `C (50%)`
    }
);
