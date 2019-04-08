| section: one

# I am section number one

---

# I am section number one, second slide

---

| section: two

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