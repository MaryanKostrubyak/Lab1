function triangle(num1, type1, num2, type2) {
    
    let a, b, c, alpha, beta;
    
    if (num1 <= 0 || num2 <= 0) {
        return "failed: one or both of the numbers is less than or equal to zero";
    }
    else if (type1 === "leg" && type2 === "leg") {
        a = num1;
        b = num2;
        c = Math.sqrt(a**2 + b**2);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        a = num1;
        c = num2;
        b = Math.sqrt(c**2 - a**2);
        alpha = Math.asin(a / c) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        c = num1;
        a = num2;
        b = Math.sqrt(c**2 - a**2);
        alpha = Math.asin(a / c) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        a = num1;
        beta = num2;
        alpha = 90 - beta;
        c = a / Math.sin(beta * (Math.PI / 180));
        b = c * Math.cos(beta * (Math.PI / 180));
    } else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        a = num1;
        alpha = num2;
        beta = 90 - alpha;
        c = a / Math.sin(alpha * (Math.PI / 180));
        b = c * Math.sin(beta * (Math.PI / 180));
    } else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        c = num1;
        beta = num2;
        alpha = 90 - beta;
        a = c * Math.sin(alpha * (Math.PI / 180));
        b = c * Math.sin(beta * (Math.PI / 180));
    } else {
        return "failed: unknown combination of side types";
    }

    if (b <= 0 || a >= c || a <= 0 || b >= c) {
        return "failed: incorrect combination of sides to form a triangle";
    }

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);

    return "success";
}

triangle(4, "leg", 8, "leg");
triangle(8, "hypotenuse", 4, "leg");
triangle(3, "leg", 4, "opposite angle");
