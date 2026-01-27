import BuyerRequestCardComponents from "@/components/buyerRequestCardComponents";

export default function BuyerRequestView() {
  const users = [
    { name: "Samiur Shahin", email: "shahinsamiur@gmail.com", role: "buyer" },
    { name: "John Doe", email: "john@example.com", role: "admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "solver" },
  ];

  return (
    <div className="space-y-3  w-full py-3">
      {users.map((user) => (
        <BuyerRequestCardComponents
          key={user.email}
          name={user.name}
          email={user.email}
          role={user.role}
        />
      ))}
    </div>
  );
}
