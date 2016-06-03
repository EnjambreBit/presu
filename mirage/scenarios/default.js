export default function(server) {
  //server.createList('presupuesto', 3);

  /* Tipos de perfiles de desarrollo */

  let tipo_disenador = server.create('tipo', {
    descripcion: 'Diseñador 2D',
    precio_por_hora: 150,
  });

  let tipo_programador = server.create('tipo', {
    descripcion: 'Programador de videjuegos Junior',
    precio_por_hora: 100,
  });


  /*
     Presupuesto de videojuego con dos items, uno de
     desarrollo de gráficos y otro de programación.
  */

  let presupuesto = server.create('presupuesto', {
    titulo: 'Angry Birds',
    cliente: 'Rovio',
    descripcion: 'Un juego de pajaritos',
    ganancia: 20,
  });


  let item = server.create('item', {
    concepto: 'Desarrollo de gráficos',
    horas: 120,
    presupuestoId: presupuesto.id,
    tipoId: tipo_disenador.id,
  });

  let item_programacion = server.create('item', {
    concepto: 'Programación',
    horas: 300,
    presupuestoId: presupuesto.id,
    tipoId: tipo_programador.id,
  });

  /*
     Presupuesto de sistema para un logotipo, que solo requiere un
     diseñador 2D.
  */

  let presupuesto_logo = server.create('presupuesto', {
    titulo: 'Renovación del logo del hipermercado',
    cliente: 'Disco',
    descripcion: 'Desarrollo de propuesta de logo',
    ganancia: 30,
  });

  let item_logo = server.create('item', {
    concepto: 'Propuesta de 3 logos renovados',
    horas: 60,
    presupuestoId: presupuesto_logo.id,
    tipoId: tipo_disenador.id,
  });

}
