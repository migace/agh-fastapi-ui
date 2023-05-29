export const StudentsList = ({ students = [] }) => {
  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{`${student.first_name} ${student.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
};
