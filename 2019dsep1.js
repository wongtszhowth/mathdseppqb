// 2019dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2019-DSE-MATH-CP1-Q01",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Formulae"],
        difficulty: 1,
        content: `令 $h$ 成為公式 $9(h+6k)=7h+8$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `展開後將含 $h$ 的項移到一邊，再解出 $h$。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$9(h+6k)=7h+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$9h+54k=7h+8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$9h-7h=8-54k$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2h=8-54k$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$h=4-27k$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$9(h+6k)=7h+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$h+6k=\\dfrac{7h+8}{9}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$h-\\dfrac{7h}{9}=\\dfrac{8}{9}-6k$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{2h}{9}=\\dfrac{8-54k}{9}$<br>$2h=8-54k$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$h=4-27k$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q02",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions"],
        difficulty: 1,
        content: `化簡 $\\dfrac{3}{7x-6} - \\dfrac{2}{5x-4}$。 <span class="marks">(3分)</span>`,
        hint: `通分後合併分子。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3}{7x-6}-\\dfrac{2}{5x-4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{3(5x-4)-2(7x-6)}{(7x-6)(5x-4)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{15x-12-14x+12}{(7x-6)(5x-4)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x}{(7x-6)(5x-4)}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q03",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Pythagoras Theorem"],
        difficulty: 1,
        content: `一長方形的長及闊分別為 $24\\text{ cm}$ 及 $(13+r)\\text{ cm}$。 若該長方形的對角線的長度為 $(17-3r)\\text{ cm}$，求 $r$。 <span class="marks">(3分)</span>`,
        hint: `利用畢氏定理列出方程求解。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$24^2+(13+r)^2=(17-3r)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$576+169+26r+r^2=289-102r+9r^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$8r^2-128r-456=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$r^2-16r-57=0$<br>$(r+3)(r-19)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$r=-3$  或  $r=19$ (捨去)</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，可得 $r=-3$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q04",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$4m^2 - 9$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$2m^2n + 7mn - 15n$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$4m^2 - 9 - 2m^2n - 7mn + 15n$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 平方差。 <br>(b) 提取公因式後十字相乘。 <br>(c) 分組或利用前兩部分結果。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $4m^2-9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2m+3)(2m-3)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $2m^2n+7mn-15n$<br>$=n(2m^2+7m-15)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=n(2m-3)(m+5)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    $4m^2-9-2m^2n-7mn+15n$<br>$=4m^2-9-(2m^2n+7mn-15n)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2m+3)(2m-3)-n(2m-3)(m+5)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2m-3)(2m-mn-5n+3)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q05",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某錢包以其標價七五折售出。 該錢包的售價為 $\\$690$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該錢包的標價。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">售出該錢包後，盈利百分率為 $15\\%$。 求該錢包的成本。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 售價 = 標價 × 0.75。 <br>(b) 由售價及盈利百分率反求成本。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\$m$ 為該錢包的標價。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(75\\%)m=690$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$m=\\dfrac{690}{0.75}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$m=920$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該錢包的標價為 $\\$920$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $\\$c$ 為該錢包的成本。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(1+15\\%)c=690$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=\\dfrac{690}{1.15}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=600$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該錢包的成本為 $\\$600$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q06",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Inequalities"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解不等式 $\\dfrac{7x+26}{4} \\le 2(3x-1)$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求同時滿足不等式 $\\dfrac{7x+26}{4} \\le 2(3x-1)$ 及不等式 $45-5x \\ge 0$ 的整數的數目。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 解不等式求範圍。 <br>(b) 取交集後數算整數個數。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{7x+26}{4}\\le 2(3x-1)$<br>$7x+26\\le 24x-8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$7x-24x\\le -8-26$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-17x\\le -34$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\ge 2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$45-5x\\ge 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\le 9$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $2\\le x\\le 9$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的數目為 8。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q07",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Ratio"],
        difficulty: 1,
        content: `在某遊樂場，成人人數與小童人數之比為 $13:6$。 若 $9$ 名成人和 $24$ 名小童進入該遊樂場，則成人人數與小童人數之比為 $8:7$。 求在該遊樂場原本的成人人數。 <span class="marks">(4分)</span>`,
        hint: `設原本成人為 $13k$、小童為 $6k$，列出方程求解。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $13k$ 及 $6k$ 分別為在該遊樂場原本的成人人數及原本的小童人數，其中 $k$ 為一正常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{13k+9}{6k+24}=\\dfrac{8}{7}$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$91k-48k=192-63$<br>$k=3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，在該遊樂場原本的成人人數為 39。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>設 $x$ 及 $y$ 分別為在該遊樂場原本的成人人數及原本的小童人數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\begin{cases}\\dfrac{x}{y}=\\dfrac{13}{6}\\\\\\dfrac{x+9}{y+24}=\\dfrac{8}{7}\\end{cases}$</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\begin{cases}6x=13y\\\\7x-8y=129\\end{cases}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $7x-8\\left(\\dfrac{6x}{13}\\right)=129$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=39$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，在該遊樂場原本的成人人數為 39。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q08",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistics"],
        difficulty: 1,
        content: `下面的圓形圖顯示一群女生擁有指環的數目的分佈。<img src="img/2019dsep1q08zh.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出該分佈的眾數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該分佈的平均值。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若從該群中隨機選出一名女生，求所選出的女生擁有多於 $3$ 枚指環的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 最大扇形對應的數目。 <br>(b) 先由角度求各部分比例及總人數，再計算加權平均。 <br>(c) 多於 3 的比例。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">2</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意 $360^\\circ-54^\\circ-90^\\circ-144^\\circ=72^\\circ$。<br>   該分佈的平均值</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{2(144)+3(54)+5(72)+7(90)}{360}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{72+90}{360}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{9}{20}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>   所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{360-54-144}{360}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{9}{20}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q09",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某兩球體的體積之和為 $324\\pi\\text{ cm}^3$。 較大的球體的半徑等於較小的球體的直徑。 以 $\\pi$ 表<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">較大的球體的體積，<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該兩球體的表面面積之和。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `設小圓半徑為 $r$，則大圓半徑為 $2r$，列出體積方程求解。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意較大的球體的半徑與較小的球體的半徑之比為 $2:1$。<br>故此，較大的球體的體積與較小的球體的體積之比為 $8:1$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    較大的球體的體積<br>$=324\\pi\\left(\\dfrac{8}{1+8}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=288\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $R\\text{ cm}$ 為較大的球體的半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{4}{3}\\pi R^3=288\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$R=6$<br>故此，較小的球體的半徑為 $3\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    該兩球體的表面面積之和</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4\\pi(6^2)+4\\pi(3^2)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180\\pi\\text{ cm}^2$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q10",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $\\mathrm{h}(x)$ 的一部分為常數，另一部分則隨 $x$ 正變。 假定 $\\mathrm{h}(-2) = -96$ 及 $\\mathrm{h}(5) = 72$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{h}(x)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">解方程 $\\mathrm{h}(x) = 3x^2$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $\\mathrm{h}(x) = A + Bx$，代入已知值。 <br>(b) 代入後解二次方程。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{h}(x)=r+sx$ ，其中 $r$ 及 $s$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $r-2s=-96$  及  $r+s=72$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $r=-48$  及  $s=24$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{h}(x)=24x-48$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{h}(x)=3x^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3x^2-24x+48=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=4$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q11",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `設 $\\mathrm{p}(x)$ 為三次多項式。 當 $\\mathrm{p}(x)$ 除以 $x-1$ 時，餘數為 $50$。 當 $\\mathrm{p}(x)$ 除以 $x+2$ 時，餘數為 $-52$。 已知 $\\mathrm{p}(x)$ 可被 $2x^2+9x+14$ 整除。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求當 $\\mathrm{p}(x)$ 除以 $2x^2+9x+14$ 時的商式。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">方程 $\\mathrm{p}(x)=0$ 有多少個有理根？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設商式為線性式，利用餘數條件求係數。<br>(b) 寫出 $\\mathrm{p}(x)$ 後檢查有理根。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $ax+b$ 為所求的商式，，其中 $a$ 及 $b$ 均為非零的常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">則可得 $\\mathrm{p}(x)=(ax+b)(2x^2+9x+14)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意  $\\mathrm{p}(1)=50$  及  $\\mathrm{p}(-2)=-52$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得  $(a(1)+b)(2(1)^2+9(1)+14)=50$  及  $(a(-2)+b)(2(-2)^2+9(-2)+14)=-52$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $a+b=2$  及  $-2a+b=-13$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $a=5$  及  $b=-3$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的商式為 $5x-3$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{p}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(5x-3)(2x^2+9x+14)=0$ （藉 (a)）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$5x-3=0$  或  $2x^2+9x+14=0$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $9^2-4(2)(14)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-31$<br>$\\lt 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，二次方程 $2x^2+9x+14=0$ 沒有實根。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\dfrac{3}{5}$ 為方程 $\\mathrm{p}(x)=0$ 的有理根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，方程 $\\mathrm{p}(x)=0$ 有 1 個有理根。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q12",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion"],
        difficulty: 1,
        content: `下面的幹葉圖顯示一些男生在 $400\\text{ m}$ 賽跑的成績（以秒為單位）的分佈。
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　0　3　$c$　$c$　8　9　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　1　1　1　2　2　5　6　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$b$</td>
    </tr>
</table>
已知該分佈的四分位數間距為 $8$ 秒。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $c$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知該分佈的分佈域超過 $34$ 秒且該分佈的平均值為 $69$ 秒。求<br></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$a$ 及 $b$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該分佈的最小可取標準差。<br><span class="marks">(6分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 由 IQR 求 $c$。 <br>(b) 由平均值及分佈域條件求 $a$、$b$，再計算最小標準差。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$72-(60+c)=8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=4$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$(80+b)-(50+a)&gt;34$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$b-a&gt;4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\frac{50+a+60(2)+63+64(2)+68+69(3)+70+71(3)+72(2)+75+76+79+80+b}{20}=69$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $a+b=7$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得  $\\begin{cases}a=0\\\\b=7\\end{cases}$  或  $\\begin{cases}a=1\\\\b=6\\end{cases}$ 。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">藉 (b)(i)，有兩個情況。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 1：\t$a=0$  及  $b=7$<br>\t\t\t\t    該分佈的標準差</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 7.582875444$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 2：\t$a=1$  及  $b=6$<br>\t\t\t\t    該分佈的標準差<br>$\\approx 7.341661937$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該分佈的最小可取標準差為 $7.34$ 秒。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $(50-69)^2+(87-69)^2&gt;(51-69)^2+(86-69)^2$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">當  $a=1$  及  $b=6$  時，該分佈的標準差最小。<br>標準差 $\\approx 7.341661937$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該分佈的最小可取標準差為 $7.34$ 秒。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q13",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry of Circles"],
        difficulty: 2,
        content: `圖中，$O$ 為圓 $ABCDE$ 的圓心。 $AC$ 為該圓的一直徑。 $BD$ 與 $OC$ 相交於點 $F$。 已知 $\\angle AED = 115^\\circ$。<img src="img/2019dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle CBF$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $BC // OD$ 及 $OB = 18\\text{ cm}$。 扇形 $OBC$ 的周界是否少於 $60\\text{ cm}$？ 試解釋你的答案。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用圓周角、圓心角及三角形性質。 <br>(b) 求扇形角度後計算弧長與半徑和。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意 $\\angle ABF+\\angle AED=180^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\angle ABF+115^\\circ=180^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得 $\\angle ABF=65^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">再者留意 $\\angle ABC=90^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $\\angle CBF+65^\\circ=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\angle CBF=25^\\circ$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>    $\\angle AOD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=360^\\circ-2\\angle AED$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=360^\\circ-2(115^\\circ)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=130^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle COD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-\\angle AOD$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-130^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=50^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $2\\angle CBF=\\angle COD$，可得 $\\angle CBF=25^\\circ$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\angle ODF=\\angle CBF=25^\\circ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle OBF=\\angle ODF=25^\\circ$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle DOF$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\angle CBF$<br>$=2(25^\\circ)$<br>$=50^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle BOC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-\\angle DOF-\\angle OBF-\\angle ODF$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-50^\\circ-25^\\circ-25^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=80^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    扇形 $OBC$ 的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{80}{360}(2\\pi(18))+2(18)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8\\pi+36$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&gt;8(3)+36$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=60$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，扇形 $OBC$ 的周界不少於 $60\\text{ cm}$。</div><div class="ms-mark">1A</div></div>
		
		<div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ODF = \\angle CBF = 25^\\circ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\angle OBF = \\angle ODF = 25^\\circ$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle BOC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ - \\angle COD - \\angle OBF - \\angle ODF$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ - 50^\\circ - 25^\\circ - 25^\\circ$<br>$=80^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    扇形 $OBC$ 的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{80}{360}\\left(2\\pi(18)\\right)+2(18)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8\\pi + 36$<br>$>8(3)+36$<br>$=60$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，扇形 $OBC$ 的周界不少於 $60\\text{ cm}$ 。</div><div class="ms-mark">1A</div></div>
		</div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q14",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Plane Geometry"],
        difficulty: 3,
        content: `圖中，$ABCD$ 為一正方形。 已知 $E$ 為 $AD$ 上的一點。 $BD$ 與 $CE$ 相交於點 $F$。 設 $G$ 為一點使得 $BG // EC$ 及 $CG // DB$。<img src="img/2019dsep1q14.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\Delta BCG \\cong \\Delta CBF$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\Delta BCF \\sim \\Delta DEF$。 <br><span class="marks">(4分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $\\angle BCF = \\angle BGC$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">設 $BC = \\ell$。 以 $\\ell$ 表 $DF$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">某人宣稱 $AE \\gt DF$。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(4分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 利用平行線及正方形性質證明全等與相似。 <br>(b) 設邊長後用相似比求長度比較。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">(a)(i)及 (a)(ii) 的評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$BC=BC$\t\t[公共邊]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle BCG=\\angle CBF$\t[(內)錯角，$CG\\parallel DB$]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle CBG=\\angle BCF$\t[(內)錯角，$BG\\parallel EC$]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\Delta BCG\\cong\\Delta BCF$\t(ASA)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\angle CBF=\\angle EDF$\t[(內)錯角，$BC\\parallel ED$]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle BFC=\\angle DFE$\t[對頂角]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle BCF=\\angle DEF$\t[內等角和]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\Delta BCF\\sim\\Delta DEF$\t(AAA)</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">藉 (a)(i)，可得 $\\angle BGC=\\angle BFC$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $\\angle BCF=\\angle BGC$，可得 $\\angle BCF=\\angle BFC$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $BF=BC=\\ell$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $BD\\cos 45^\\circ=\\ell$，可得 $BD=\\sqrt{2}\\ell$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DF$<br>$=BD-BF$<br>$=\\sqrt{2}\\ell-\\ell$<br>$=(\\sqrt{2}-1)\\ell$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">藉 (b)(i)，$\\Delta BCF$ 為一等腰三角形且 $BC=BF$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)(ii)，$\\Delta DEF$ 為一等腰三角形且 $DE=DF$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AE$<br>$=AD-DE$<br>$=AD-DF$<br>$=\\ell-(\\sqrt{2}-1)\\ell$（藉 (b)(i)）<br>$=(2-\\sqrt{2})\\ell$<br>$&gt;\\left(2-\\dfrac{3}{2}\\right)\\ell$<br>$=\\dfrac{\\ell}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $AE+DE=\\ell$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $DE&lt;\\dfrac{\\ell}{2}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $DE=DF$，可得 $DF&lt;\\dfrac{\\ell}{2}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $AE&gt;DF$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q15",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutation and Combination"],
        difficulty: 1,
        content: `某班有 $21$ 名男生及 $11$ 名女生。 若從該班中選出 $5$ 名學生組成一個有至少 $1$ 名男生的委員會，則可組成多少個不同的委員會？<span class="marks">(3分)</span>`,
        hint: `總選法減去全女生的選法。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">所求的數目</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=C_5^{13}-C_5^{11}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=200914$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>所求的數目</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=C_4^{12}C_1^{1}+C_3^{12}C_2^{1}+C_2^{12}C_3^{1}+C_1^{12}C_4^{1}+C_5^{12}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=200914$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q16",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Simultaneous Equations", "Sequences"],
        difficulty: 3,
        content: `設 $\\alpha$ 及 $\\beta$ 均為實數使得 $\\begin{cases} \\beta = 5\\alpha - 18 \\\\[1.2ex] \\beta = \\alpha^2 - 13\\alpha + 63 \\end{cases}$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\alpha$ 及 $\\beta$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某等差數列的第 $1$ 項及第 $2$ 項分別為 $\\log \\alpha$ 及 $\\log \\beta$。 求 $n$ 的最小值使得該數列的首 $n$ 項之和大於 $888$。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 聯立方程求解。 <br>(b) 求公差後用等差數列求和公式解不等式。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">把 $\\beta=5\\alpha-18$ 代入 $\\beta=\\alpha^2-13\\alpha+63$，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$5\\alpha-18=\\alpha^2-13\\alpha+63$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\alpha^2-18\\alpha+81=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $\\alpha=9$ 及 $\\beta=27$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $\\mathrm{T}(n)$ 為該等差數列的第 $n$ 項。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{T}(1)=\\log 9=\\log 3^2=2\\log 3$ 及 $\\mathrm{T}(2)=\\log 27=\\log 3^3=3\\log 3$，所以該數列的公差為 $\\log 3$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{T}(1)+\\mathrm{T}(2)+\\mathrm{T}(3)+\\cdots+\\mathrm{T}(n)&gt;888$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2\\log 3+3\\log 3+4\\log 3+\\cdots+(n+1)\\log 3&gt;888$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{n}{2}\\bigl(2(2\\log 3)+(n-1)\\log 3\\bigr)&gt;888$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(\\log 3)n^2+(3\\log 3)n-1776&gt;0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;-62.52928981$ 或 $n&gt;59.52928981$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最小值為 60。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q17",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Loci"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $a$ 及 $p$ 分別為 $\\Delta CDE$ 的面積及周界。 將 $\\Delta CDE$ 的內切圓的半徑記為 $r$。 證明 $pr = 2a$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $H$ 及點 $K$ 的坐標分別為 $(9,12)$ 及 $(14,0)$。 設 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $OH$ 的垂直距離等於由 $P$ 至 $HK$ 的垂直距離，其中 $O$ 為原點。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $\\angle OHK$ 之間的幾何關係。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">利用 (a)，求 $\\mathit{\\Gamma}$ 的方程。<br><span class="marks">(5分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 面積公式 $a = rs$ 其中 $s$ 為半周界。 <br>(b) 軌跡為角平分線，利用距離公式或面積關係求方程。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{r(CD)}{2}+\\dfrac{r(DE)}{2}+\\dfrac{r(CE)}{2}=a$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$r(CD+DE+CE)=2a$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$pr=2a$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\Gamma$ 為 $\\angle OHK$ 的角平分線。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$OH=\\sqrt{9^2+12^2}=15$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$HK=\\sqrt{(9-14)^2+12^2}=13$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\Delta OHK$ 的面積 $=\\dfrac{14\\times 12}{2}=84$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">再者留意 $\\Delta OHK$ 的周界 $=13+14+15=42$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $r$ 為 $\\Delta OHK$ 的內切圓的半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)，可得 $42r=2(84)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$r=4$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $(h,4)$ 為 $\\Delta OHK$ 的內心的坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，可得 $(15-h)+(14-h)=13$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $h=8$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\Gamma$ 的斜率<br>$=\\dfrac{12-4}{9-8}=8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\Gamma$ 的方程為<br>$y-4=8(x-8)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$8x-y-60=0$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q18",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry"],
        difficulty: 3,
        content: `圖中顯示四面體 $ABCD$。 設 $P$ 為 $AD$ 上的一點使得 $BP$ 垂直於 $AD$。 某工匠得知 $AC = AD = CD = 13\\text{ cm}$ 、 $BC = 8\\text{ cm}$ 、 $BD = 12\\text{ cm}$ 及 $\\angle ABD = 72^\\circ$。<img src="img/2019dsep1q18.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\angle BAD$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$CP$。<br><span class="marks">(5分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該工匠宣稱 $\\angle BPC$ 為面 $ABD$ 與面 $ACD$ 間的交角。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式及正弦公式求角與長度。 <br>(b) 檢查 $BP$ 是否垂直於交線 $AD$。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">藉正弦公式，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle BAD}{BD}=\\dfrac{\\sin\\angle ABD}{AD}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle BAD}{12}=\\dfrac{\\sin 72^\\circ}{13}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\angle BAD\\approx 61.4^\\circ$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\angle ADB\\approx 180^\\circ-72^\\circ-61.38986936^\\circ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle ADB\\approx 46.61013064^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\angle ADB=\\dfrac{AD-AP}{BD}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AP\\approx 13-12\\cos 46.61013064^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AP\\approx 4.756491614$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\angle CAP=60^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$CP^2=AC^2+AP^2-2(AC)(AP)\\cos\\angle CAP$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$CP^2\\approx 13^2+4.756491614^2-2(13)(4.756491614)\\cos 60^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$CP\\approx 11.4\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$AP^2+CP^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 4.756491614^2+11.39253359^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 152.4140341$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AC^2=169$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得 $AP^2+CP^2\\ne AC^2$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，$\\angle APC$ 不是直角。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$\\angle BPC$ 不是面 $ABD$ 與面 $ACD$ 間的交角。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2019-DSE-MATH-CP1-Q19",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Functions", "Coordinate Geometry"],
        difficulty: 3,
        content: `設 $f(x) = \\dfrac{1}{1+k}\\bigl(x^2 + (6k-2)x + (9k+25)\\bigr)$，其中 $k$ 為一正常數。 將點 $(4,33)$ 記為 $F$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $y=\\mathrm{f}(x)$ 的圖像通過 $F$。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $y=\\mathrm{f}(x)$ 的圖像對 $y$ 軸反射，然後將所得的圖像向上平移 $4$ 單位得出 $y=\\mathrm{g}(x)$ 的圖像。 設 $U$ 為 $y=\\mathrm{g}(x)$ 的圖像的頂點。 將原點記為 $O$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">利用配方法，以 $k$ 表 $U$ 的坐標。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $k$ 使得通過 $F$、$O$ 及 $U$ 的圓的面積最小。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">對任意正常數 $k$，$y=\\mathrm{g}(x)$ 的圖像均通過同一點 $G$。 設 $V$ 為 $y=\\mathrm{g}(x)$ 的圖像的頂點使得通過 $F$、$O$ 及 $V$ 的圓的面積最小。 $F$、$G$、$O$ 與 $V$ 是否共圓？ 試解釋你的答案。 <br><span class="marks">(11分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 代入 $x=4$ 驗證。 <br>(b) 先求 $\\mathrm{g}(x)$，配方找頂點，再求最小面積對應的 $k$，最後檢查共圓條件。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(4)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{1+k}\\bigl(4^2+4(6k-2)+(9k+25)\\bigr)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{1+k}(33+33k)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=33$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$y=\\mathrm{f}(x)$ 的圖像通過 $F$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\mathrm{g}(x)=\\mathrm{f}(-x)+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{1+k}\\bigl((-x)^2+(6k-2)(-x)+(9k+25)\\bigr)+4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{1+k}\\bigl(x^2-(6k-2)x+(9k+25)\\bigr)+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{k+1}\\bigl((x-(3k-1))^2-(k+1)(9k-24)\\bigr)+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{k+1}(x-(3k-1))^2+(28-9k)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$U$ 的坐標為 $(3k-1,\\,28-9k)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意當 $FO$ 為通過 $F$ 及 $O$ 的圓的一直徑時，該圓的面積最小。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">若 $U$ 在該圓上，則可得 $\\angle FUO=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">在這情況下，可得 $k\\ne\\dfrac{1}{3}$ 及 $k\\ne\\dfrac{5}{3}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\left(\\dfrac{(28-9k)-0}{(3k-1)-0}\\right)\\left(\\dfrac{33-(28-9k)}{4-(3k-1)}\\right)=-1$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{(28-9k)(5+9k)}{(3k-1)(5-3k)}=-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$2k^2-5k-3=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$k=3$（$k=-\\dfrac{1}{2}$ 捨去）</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，當 $k=3$ 時，通過 $F$、$O$ 及 $U$ 的圓的面積最小。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">$G$ 的坐標為 $(-4,37)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$FG$ 的斜率與 $GO$ 的斜率之積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\left(\\dfrac{37-33}{-4-4}\\right)\\left(\\dfrac{37-0}{-4-0}\\right)=\\dfrac{37}{8}\\ne -1$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $\\angle FGO\\ne 90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $\\angle FVO=90^\\circ$，所以 $G$ 不在通過 $F$、$O$ 及 $V$ 的圓上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$F$、$G$、$O$ 與 $V$ 不是共圓。</div><div class="ms-mark">1A</div></div></div>`
    }
);
