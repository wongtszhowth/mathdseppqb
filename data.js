// data.js
const questions = [
    {
        id: "DSE-2025-P1-Q14",
        year: 2025,
        type: "P1",
        level: ["Senior"], // 初中: "Junior", 高中: "Senior"
        domain: ["Algebra", "Geometry"],
        topic: ["Functions and Graphs", "Coordinate Geometry"], // 👈 必須使用下方對應的英文名稱
        difficulty: 4,
        content: `已知二次函數的圖像 $y = f(x)$ 的頂點為 $V(2, -4)$。
        <img src="25p1q7.jpg" class="q-img" alt="題目附圖">`,
        hint: `利用配方法。`,
        solution: `頂點為 $(2, -2)$。`
    },
    {
        id: "DSE-2025-P1-Q15",
        year: 2025,
        type: "P1",
        domain: ["Algebra", "Geometry"],
        topic: ["Quadratic Functions", "Coordinate Geometry"],
        difficulty: 4,
        content: `已知二次函數的圖像 $y = f(x)$ 的頂點為 $V(2, -4)$。
<div class="q-line"><span class="q-text">(a) 求 $f(x)$ 的表達式。</span><span class="marks">(3分)</span></div><div class="q-line"><span class="q-text">(b) 試求圖像平移後的新頂點坐標。</span><span class="marks">(2分)</span></div>`,
        hint: `(a) 設設頂點式為 $f(x) = a(x-2)^2 - 4$。利用對稱性， $A$ 和 $B$ 距離頂點的對稱軸 $x=2$ 各有 3 單位距離，從而導出交點坐標。
(b) 圖像平移時，頂點 $(h, k)$ 會隨之改變：向右平移增加 $h$，向上平移增加 $k$。`,
        solution: `(a)
因為頂點為 $(2, -4)$，設 $f(x) = a(x-2)^2 - 4$。
由對稱性知，$A$ 和 $B$ 的 $x$ 坐標為 $2 \\pm \\frac{6}{2}$，即 $x = -1$ 或 $x = 5$。
將 $(5, 0)$ 代入 $f(x)$：
$$0 = a(5-2)^2 - 4$$
$$4 = 9a \\implies a = \\frac{4}{9}$$
$$\\therefore f(x) = \\frac{4}{9}(x-2)^2 - 4$$

(b)
原頂點為 $(2, -4)$。
向右平移 3 單位 $\\implies x = 2 + 3 = 5$
向上平移 5 單位 $\\implies y = -4 + 5 = 1$
新頂點坐標為 $(5, 1)$。`
    },
    {
        id: "DSE-2024-P2-Q08",
        year: 2024,
        type: "P2",
        domain: ["Algebra"],
        topic: ["Quadratic Functions"],
        difficulty: 2,
        content: `若方程 $x^2 - kx + 9 = 0$ 有實根，求 $k$ 的可能值範圍。`,
        hint: `若二次方程有實根，其判別式 (Discriminant) 必須大於或等於零，即 $\\Delta \\ge 0$。`,
        solution: `由於方程有實根，$\\Delta \\ge 0$。
$$(-k)^2 - 4(1)(9) \\ge 0$$
$$k^2 - 36 \\ge 0$$
$$(k-6)(k+6) \\ge 0$$
$$\\therefore k \\le -6 \\text{ 或 } k \\ge 6$$`
    },
    {
        id: "DSE-2024-P1-Q12",
        year: 2024,
        type: "P1",
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 3,
        content: `已知直線 $L$ 的方程為 $3x + 4y - 12 = 0$。
(a) 求 $L$ 的 $x$ 截距和 $y$ 截距。 (2分)
(b) 求原點 $O(0,0)$ 與 $L$ 的最短距離。 (3分)`,
        hint: `(a) 求 $x$ 截距時令 $y=0$；求 $y$ 截距時令 $x=0$。
(b) 最短距離即點到直線的垂直距離，可使用公式 $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$ 或利用直角三角形面積求解。`,
        solution: `(a)
當 $y = 0$ 時，$3x - 12 = 0 \\implies x = 4$。 故 $x$ 截距為 4。
當 $x = 0$ 時，$4y - 12 = 0 \\implies y = 3$。 故 $y$ 截距為 3。

(b)
設 $L$ 與 $x$ 軸交於 $A(4,0)$，與 $y$ 軸交於 $B(0,3)$。
$OA = 4$, $OB = 3$。
根據畢氏定理，$AB = \\sqrt{3^2 + 4^2} = 5$。
設原點到 $L$ 的最短距離為 $h$。
利用 $\\triangle OAB$ 的面積：
$$\\frac{1}{2} \\times OA \\times OB = \\frac{1}{2} \\times AB \\times h$$
$$4 \\times 3 = 5 \\times h$$
$$h = 2.4$$
$$\\therefore \\text{原點與 } L \\text{ 的最短距離為 } 2.4\\text{。}$$`
    },
    {
        id: "DSE-2023-P2-Q35",
        year: 2023,
        type: "P2",
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 5,
        content: `點 $A(1, 2)$ 繞原點逆時針方向旋轉 $90^\\circ$ 得到點 $B$，
然後將 $B$ 沿 $x$ 軸反射得到點 $C$。求 $C$ 的坐標。`,
        hint: `1. 點 $(x, y)$ 繞原點逆時針旋轉 $90^\\circ$ 後的坐標為 $(-y, x)$。
2. 點 $(x, y)$ 沿 $x$ 軸反射後，其 $y$ 坐標變號，即 $(x, -y)$。`,
        solution: `將 $A(1, 2)$ 繞原點逆時針旋轉 $90^\\circ$：
$$B = (-2, 1)$$
再將 $B(-2, 1)$ 沿 $x$ 軸反射：
$$C = (-2, -1)$$
故正確答案為 $(-2, -1)$。`
    }
];
