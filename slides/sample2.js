export default `
# From triangles to polygons

> Polygons are shapes more complex than triangles, having more sides and angles than 3. 


## Triangles form polygons

> Polygons are composed by triangles.

> For example a polygon with four edges can be divided into two triangles, properly connected. 

<div style="background: var(--color-gray-light); height: 10rem; margin: 1rem 0;" />

> In a different way, the diagonals of a polygon divide the whole shape into triangles. 

<div style="background: var(--color-gray-light); height: 10rem; margin: 1rem 0;" />

> Even more, different triangle types can be shaped using intersected diagonals, as the following figure presents.  


## Normal polygons

> Normal polygons are polygons with all sides and angles equal. 

> Are formed by triangles, normally isosceles.

> For example 6 triangles connected together form a regular polygon. 

> Normal polygons are characterized by the number of edges or sides. 

<div style="background: var(--color-gray-light); height: 10rem; margin: 1rem 0;" />

> Square: 4 sides, edges / Pentagon: 5 sides, edges / Hexagon: 6 sides, edges / Heptagon: 7 sides, edges


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

<Math math="interiorangle = \\frac{180 \\cdot (n-2)}{n}"/>

`;