function submitForm(e) {
  // so e is the event object and we used prevent default because
  // when we click a button in a form it refreshes the page or send a req so we dont want it to do this dafault behaviour
  // so we use event object and use it we can also write eve or event in place of e
  // its just to prevent the default behaviour of button inside a form that is refreshes
  e.preventDefault();
  console.log("Submitted!!");
}

export default function Form() {
  return (
    <form onSubmit={submitForm}>
      <button>Submit</button>
    </form>
  );
}
