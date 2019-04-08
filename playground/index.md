# First page

<big><big>Here comes the introductiory text. It can be longer or it can be also shorter.</big></big>

<f-embed src="./menu.md" />

---

| section: one
| theme: yellow

# I am section number one

---

# I am section number one, second slide

---

| section: two
| theme: yellow

# I am section number two

---

# I am section number two, second slide

---

| section: test

# I am a test

<pre>Test status: {{ get('completed') }}</pre>

<f-inline>
<button @click="set('completed', true)">Click here to complete test</button>
<button @click="set('completed', false)">Click to start over the test</button>
</f-inline>

<div class="primary" @click="goto(0)">Back to home</div>