const divContainer = document.querySelector(".container");
const toggle = document.querySelector("#toggle");
//let status = "disabled";
toggle.addEventListener("click", () => {
  if (toggle.textContent === "Hide Calculator") {
    divContainer.style.display = "none";
    toggle.textContent = "Show Calculator";
    // status = "enabled";
  } else {
    divContainer.style.display = "inline-block";
    toggle.textContent = "Hide Calculator";
  }
});

const activity = document.querySelector("#activity");
activity.addEventListener("click", () => {
  btnSubmit.style.display = "inline-block";
});
const amount = document.querySelector("#amount");
const btnSubmit = document.querySelector("#submit");
const bList = document.querySelector("#bookList");

const bInit = document.querySelector("#bInit");
bList.innerHTML = `
<table>
<th>Date</th>
<th>Activity</th>
<th>Amount </th>
<th>Debit </th>
<th>Credit </th>
<th>Balance </th>
<th></th>
<tr></tr>
</table>`;

let balance = 100;

let data = [];

let obj = {
  date: "",
  activity: "",
  amount: 0,
  debit: 0,
  credit: 0,
  balance: 0
};

let saldo = 0;

if (localStorage.getItem("data") === null) {
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("saldo", 0);
}

const _table = document.querySelector("table");
let newRow = document.createElement("tr");
btnSubmit.addEventListener("click", fnSubmit, false);

function fnSubmit(e) {
  let now = new Date();
  let debit = activity.value === "salary" ? amount.value : 0;
  let credit = activity.value !== "salary" ? amount.value : 0;

  newRow.innerHTML = "<tr></tr>";
  newRow.innerHTML = `
  <tr>
  <td>${now}</td>
  <td>${activity.value}</td>
  <td>${amount.value}</td>
  <td class="debit animated shake">${debit}</td>
  <td class="credit animated bounceInDown">${credit}</td>
  <td>${parseInt(bInit.value) + (debit - credit)}</td>
  <td></td>
  </tr>`;

  balance = parseInt(bInit.value) + (debit - credit);
  saldo = balance;
  // update Data LS
  obj = {
    date: now,
    activity: activity.value,
    amount: amount.value,
    debit: debit,
    credit: credit,
    balance: balance
  };
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("saldo", saldo);

  _table.appendChild(newRow);
  _table.innerHTML = "";
  loadEventListeners();
  btnSubmit.style.display = "none";
  e.preventDefault();
}

loadEventListeners();

function loadEventListeners() {
  data = JSON.parse(localStorage.getItem("data"));
  saldo = localStorage.getItem("saldo");
  let s = "";
  let _tAmount = 0;
  let _tDebit = 0;
  let _tCredit = 0;
  bInit.value = saldo;
  let ls = data.map((m, i) => {
    if (i !== 0) {
      let myclass =
        m.debit !== 0 ? "debit animated shake" : "credit animated bounceInDown";
      s += `
    <tr class="${myclass}">
    <td>${m.date.slice(0, 10)}</td>
    <td>${m.activity.charAt(0).toUpperCase()}${m.activity.substring(1)}</td>
    <td>${m.amount}</td>
    <td>${m.debit}</td>
    <td>${m.credit}</td>
    <td>${m.balance}</td>
    <td> <a href="#" id="delete-item" onClick="onDelete(${i})">
    <i class="fa fa-trash-o"></i>
    </a> </td>
    </tr>`;
      _tAmount += parseInt(m.amount);
      _tDebit += parseInt(m.debit);
      _tCredit += parseInt(m.credit);
      return m;
    }
  });
  let foot = `
  <tr class="foot">
    <td> </td>
    <td>Total </td>
    <td>${_tAmount} </td>
    <td>${_tDebit}</td>
    <td>${_tCredit}</td>
    <td></td>
  </tr>`;
  _table.innerHTML = bList.innerHTML + s + foot;
  bList.appendChild(_table);
}

function onDelete(i) {
  if (confirm("Are You Sure?")) {
    saldo =
      parseInt(saldo) + parseInt(data[i].debit) + parseInt(data[i].credit);
    bInit.value = saldo;
    data.splice(i, 1);
    clearFromLocalStorage();
    localStorage.setItem("saldo", saldo);
    localStorage.setItem("data", JSON.stringify(data));
    _table.innerHTML = "";
    loadEventListeners();
  }
}

// Clear from Ls
function clearFromLocalStorage() {
  localStorage.clear();
}