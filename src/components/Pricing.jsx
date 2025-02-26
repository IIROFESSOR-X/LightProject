import './Pricing.css';

const services = [
  { name: 'Установка розетки', price: '200 грн' },
  { name: 'Ремонт проводки', price: '500 грн' },
  { name: 'Монтаж светильника', price: '300 грн' },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Наши цены</h2>
      <table>
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Pricing;
