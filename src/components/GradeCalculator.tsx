const calculateAverage = (grades: number[]): number => {
  const total = grades.reduce((acc, grade) => acc + grade, 0);
  return total / grades.length;
};

export const GradeCalculator = () => {
    const grades: number[] = [85, 90, 78, 100];

    return (
        <div>
            <h2>Calificaciones</h2>
            <p>{grades.join(", ")}</p>
            <p>Promedio: {calculateAverage(grades)}</p>
        </div>
    )
};
