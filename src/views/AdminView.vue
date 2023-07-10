<template>
    <div>
        <h1>Admin </h1>
        
  <section id="adminSection">
    <h1>Administration</h1>
    <form class="formCSS" id="form" required>
      <input type="text" id="id" required placeholder="Enter ID">
      <input type="url" id="imageofProduct" placeholder="Insert url">
      <input type="text" id="name" placeholder="Enter product name" required>
      <input type="text" id="description" placeholder="Enter Description" required>
      <input type="number" id="price" placeholder="Enter price" required>
      <button type="button" id="submit" class="addProdBtn">Add Product</button>
    </form>

    <table id="adminTable">
      <thead>
        <tr>
          <th>id</th>
          <th>image</th>
          <th>Product</th>
          <th>Description</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody id="adminTableBody"></tbody>
    </table>
  </section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>