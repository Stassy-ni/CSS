// Шаблон строки таблицы заданий
function createTaskRow(data) {
  return `<tr>
    <td><span class="task-title">${data.title}</span></td>
    <td><span class="small-topic">${data.topic}</span></td>
    <td><span class="task-dot ${data.dots[0]}"></span></td>
    <td><span class="task-dot ${data.dots[1]}"></span></td>
    <td><span class="task-dot ${data.dots[2]}"></span></td>
    <td><span class="task-dot ${data.dots[3]}"></span></td>
    <td>
      <div class="progress" style="height: 20px;">
        <div class="progress-bar" style="width:${data.progress.correct}%; background-color:#A4E3C4;">${data.correct}</div>
        <div class="progress-bar" style="width:${data.progress.wrong}%; background-color:#F5B5B0;">${data.wrong}</div>
        <div class="progress-bar text-dark" style="width:${data.progress.empty}%; background-color:#DEE2E6;">${data.empty}</div>
      </div>
    </td>
    <td>${data.correct}</td>
    <td>${data.wrong}</td>
    <td>${data.accuracy}%</td>
    <td><span class="badge bg-success-subtle text-success">${data.status}</span></td>
    <td class="text-nowrap">
      <a href="#" class="icon-action me-2" title="Редактировать"><i class="bi bi-pencil"></i></a>
      <a href="#" class="icon-action" title="Удалить"><i class="bi bi-trash"></i></a>
    </td>
  </tr>`;
}

// Заполнение примера на странице templates_teacher.html
function demoFillTable() {
  const tbody = document.querySelector('#templateTableBody');
  if (!tbody) return;
  const row = createTaskRow({
    title: 'Шаблон задания',
    topic: 'Раздел математики',
    dots: ['dot-correct','dot-wrong','dot-viewed','dot-empty'],
    progress: {correct:60, wrong:20, empty:20},
    correct: 6,
    wrong: 2,
    empty: 2,
    accuracy: 60,
    status: 'Активно'
  });
  tbody.innerHTML = row;
}

document.addEventListener('DOMContentLoaded', demoFillTable);