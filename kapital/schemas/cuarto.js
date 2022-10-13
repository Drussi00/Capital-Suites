export default {
  name: "cuarto",
  title: "Cuarto",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "preciosLogin",
      title: "PrecioLogin",
      type: "number",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },

    {
      name: "description",
      title: "Descripcion",
      type: "string",
    },
    {
      name: "comodidad1",
      title: "Comodidad1",
      type: "string",
    },
    {
      name: "comodidad2",
      title: "Comodidad2",
      type: "string",
    },
    {
      name: "comodidad3",
      title: "Comodidad3",
      type: "string",
    },
    {
      name: "comodidad4",
      title: "Comodidad4",
      type: "string",
    },
    {
      name: "comodidad5",
      title: "Comodidad5",
      type: "string",
    },
    {
      name: "comodidad6",
      title: "Comodidad6",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
  ],
};
