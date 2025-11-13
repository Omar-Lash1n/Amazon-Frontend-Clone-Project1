// الخطوة 1: استيراد البيانات الأصلية
fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products; // بدل const products = data;
    const targetCount = 300;

    // لو العدد أقل من 300، نكرّر العناصر
    while (products.length < targetCount) {
      const copy = products.map((p) => ({ ...p }));
      // نعدّل الـ id علشان تبقى مميزة
      copy.forEach((p, i) => {
        p.id = products.length + i + 1;
      });
      products.push(...copy);
    }

    // نقطع لو زادوا عن 300 بالضبط
    const finalProducts = products.slice(0, targetCount);

    // نحولهم لنص JSON
    const json = JSON.stringify(finalProducts, null, 2);

    // نحفظهم كملف جديد
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "products_300.json";
    link.click();
  });
