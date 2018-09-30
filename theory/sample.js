export default `

# <span class="bullet">1</span> Triangles

## What is a triangle

> Triangles derive when we join three lines together. 

> In every triangle we distinguish 3 sides and 3 angles.

<Triangle />
<Triangle :p1="{x:10, y:20}" :p2="{x:60, y:10}" :p3="{x:90, y:90}" />

> The length of the sides is measured in cm, inches, etc. 

> Angles are measured in degrees. We name  angles by using the letter of their corresponding  corner eg. A, B, C 

---

## The types of triangles 

> By comparing angles and sides, we distinguish triangles as follows. 

<Poly />

### Scalene triangle 

> It has all sides and angles unequal, of different size.

> Particularly, if one angle of the triangle is greater than 90° then this triangle is called Obtuse.

<Poly />

### Acute scalene triangle 

> If all angles are less than 90° then it is called Acute

<Poly />

### Isosceles triangle

> It  has two sides and angles equal.

<Poly />

### Equilateral Triangle 

> It has all three sides and angles equal. 

> It can be proved that each angle is 60o.

### Orthogonal or Right Triangle

> One angle of an Orthogonal triangle is equal to 90o

---

<Poly />

## How to calculate angles and sides in triangles.

> Rule: The sum of all 3 angles in every triangle is 180°. 

### A

> In any triangle we know angles A and B and want to calculate angle C. 

> For example, if we assume that 

<Math math="∠A = 50°"/>

<Math math="∠B = 30°"/>

then, since 

<Math math="∠A + ∠B + ∠C = 180°"/>   

<Math math="∠C = 180°  - ( ∠A + ∠B ) =  180° - (50°+30° ) = 180° - 80° = 100°"/>

### B

> In a **isosceles triangle**, we know angle A and we want to calculate angles 
B or C.

> If we know the degrees of angle A we can calculate angles B and C by using the formula 

<Math math="B or C=\\frac{180° - A}{2}"/>

> Example: if

<Math math="A=100°"/>

> then

<Math math="B=\\frac{(180°-100°)}{2}=\\frac{80°}{2}=40°"/>

---

## Theorem of Pythagoras

> In every orthogonal (right) triangle with sides a, b and c (A is the right angle) it holds 

<Poly />

<Math math="a^2=b^2+c^2"/>

---

### C

> In a right triangle we know sides a and b and we want to calculate the third side c.

> Let <Math math="a=5" /> and <Math math="b=4" />

<Math math="a^2=b^2+c^2"/>

<Math math="c^2=a^2-b^2=5^2-4^2=25-16=9"/>

<Math math="c=\\sqrt{9}=3"/>

---

### D 

> In a isoskeles triangle, we know all the sides and we want to calculate the height from angle A

> Let <Math math="a = 10"/> and <Math math="b = c = 16"/>

> The triangle AHC is orthogonal and the unknown height h is one of its vertical sides.

> In that triangle holds the theorem of Pythogoras so <Math math="AC^2=AH^2+HC^2"/>. We notice that AH intersects BC in the middle H, so HC is half of BC, ie. <Math math="HC=\\frac{10}{2}=5"/>

> The height h is estimated by

<Math math="h^2=AH^2=AC^2+HC^2=16^2+5^2=256+25=281"/>

<Math math="h=\\sqrt{281} \\approx 16.7"/>

---

## Use of trigonometric functions to combine angles and sides in right triangles

> The ratios of the sides of a right triangle are called trigonometric ratios. 

> **The three common trigonometric ratios are the sine (sin), cosine (cos), and tangent (tan).**

> These are defined as follows 

<Math math="\\sin({B}) = \\frac{b}{a}\\enspace \\sin({C}) = \\frac{c}{a}"/>

<Math math="\\sin({C}) = \\frac{c}{a}\\enspace \\cos({B}) = \\frac{c}{a}"/>

<Math math="\\tan({B}) = \\frac{b}{c}\\enspace \\tan({C}) = \\frac{b}{c}"/>

<Poly />

> Example. In the following right triangle, angle B can be estimated in terms of trigonometric functions as 

<Math math="\\sin({B}) = \\frac{15}{17} \\approx 0.88"/>

<Math math="\\cos({B}) = \\frac{8}{17} \\approx 0.47"/>

<Math math="\\tan({B}) = \\frac{15}{8} \\approx 1.87"/>

The actual value of angle B in degrees derives from the inverse function. For example if

<Math math="sin(B) \\approx 0.88"/>

then

<Math math="sin{^-1}(0.88) \\approx 28°"/>

> The inverse trigonometric functions can be found and estimated by a typical calclator.

> The values of trigonometric function applied to frequently used angles are:

...

---

# <span class="bullet">2</span> From triangles to polygons

> Polygons are shapes more complex than triangles, having more sides and angles than 3. 

## Triangles form polygons

> Polygons are composed by triangles.

> For example a polygon with four edges can be divided into two triangles, properly connected. 

<Poly />

> In a different way, the diagonals of a polygon divide the whole shape into triangles. 

<Poly />

> Even more, different triangle types can be shaped using intersected diagonals, as the following figure presents.  

---

## Normal polygons

> Normal polygons are polygons with all sides and angles equal. 

> Are formed by triangles, normally isosceles.

> For example 6 triangles connected together form a regular polygon. 

> Normal polygons are characterized by the number of edges or sides. 

<Poly />

> Square: 4 sides, edges / Pentagon: 5 sides, edges / Hexagon: 6 sides, edges / Heptagon: 7 sides, edges

---

## Calculations in normal polygons

> In a normal polygon normally we use the following measures:

> * the side ***s***
> * the **interior angle**, the angle of the edge, the angle between two consecutive sides
> * the apothem ***a***, the distance of the center to the midle of the side
> * the radius ***r***, the distance from the center to an edge

> In a polygon with n sides, If we define the radius **r** that denotes its size, we can estimate the above measures using the formulas

<Math math="w=\\frac{360}{n}"/>

<Math math="s=2 \\cdot r\\cdot sin(w)"/>

<Math math="a = r \\cdot cos(\\frac{w}{2})"/>

<Math math="interior \\enspace angle = \\frac{180 \\cdot (n-2)}{n}"/>

---

# <span class="bullet">3</span>Polyhedra

<Poly />

> When regular polygons are expanded and seen in the three dimensions, form the Regular Polyhedra. These are solid objects bounded by flat surfaces.

> In regular polyhedral we distinguish *Faces*, *Edges* and *Vertices*.

> *Faces* are the bounded surfaces that consist the external surface of the structure. Two adjacent faces are connected together with an *Edge*. Three or more  adjacent faces intersect to a *Vertex*. 

> In regular polyhedrons the faces are identical. 

---

> Most common regular polyherdra are:

<Poly />

### Regular tetrahedron, pyramid 
4 faces, 6 edges, 4 vertices

<Poly />

### Cube
6 faces, 12 edges, 8 vertices

<Poly />

### Octahedron
8 faces, 12 edges, 6 vertices

<Poly />

### Dodecahedron
12 faces, 30 edges, 20 vertices

<Poly />

### Icosahedron 
20 faces, 30 edges, 12 vertices

---

## Unfolding Polyhedra

> Polyhedra can be unfolded into nets, i.e shapes that combine triangles and regular polygons. The following figures present how regular polyhedra are decomposed into two-dimentional nets. 

<Poly />

`;