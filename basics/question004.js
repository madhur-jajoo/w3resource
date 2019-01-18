/**
 * Write a JavaScript program to find the area of a triangle,
 * where lengths of the three of its sides are 5, 6, 7.
 */

(function(args) {
  const [s1, s2, s3] = [...args];
  const perimeter = (s1 + s2 + s3) / 2;
  const area = Math.sqrt(
    perimeter * (perimeter - s1) * (perimeter - s2) * (perimeter - s3)
  );
  console.log(area);
})([5, 6, 7]);
