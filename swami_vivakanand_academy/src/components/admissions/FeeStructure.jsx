import { IndianRupee, BusFront, GraduationCap } from "lucide-react";
import Container from "../common/Container";

const fees = [
  { className: "Nursery", fee: "7,400" },
  { className: "LKG", fee: "7,720" },
  { className: "UKG", fee: "7,720" },
  { className: "Class 1", fee: "8,518" },
  { className: "Class 2", fee: "8,851" },
  { className: "Class 3", fee: "9,010" },
  { className: "Class 4", fee: "9,170" },
  { className: "Class 5", fee: "9,330" },
  { className: "Class 6", fee: "9,662" },
  { className: "Class 7", fee: "10,142" },
  { className: "Class 8", fee: "10,781" },
];

const FeeStructure = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Admission
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Fee Structure
          </h2>

          <p className="mt-4 text-gray-600">
            Academic Session 2026–27
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
  {/* Pre Primary */}
  <div className="rounded-3xl bg-white p-8 shadow-lg border">
    <div className="mb-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <GraduationCap className="text-blue-700" size={30} />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        Pre Primary
      </h3>

      <p className="text-gray-500">
        Nursery - Class 1
      </p>
    </div>

    <div className="space-y-4">
      {[
        ["Nursery", "₹7,400"],
        ["LKG", "₹7,720"],
        ["UKG", "₹7,720"],
        ["Class 1", "₹8,518"],
      ].map(([cls, fee]) => (
        <div
          key={cls}
          className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
        >
          <span className="font-medium">{cls}</span>

          <span className="font-bold text-blue-700">
            {fee}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Primary */}

  <div className="rounded-3xl bg-white p-8 shadow-lg border">
    <div className="mb-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <GraduationCap className="text-green-700" size={30} />
      </div>

      <h3 className="text-2xl font-bold">
        Primary
      </h3>

      <p className="text-gray-500">
        Class 2 - 5
      </p>
    </div>

    <div className="space-y-4">
      {[
        ["Class 2", "₹8,851"],
        ["Class 3", "₹9,010"],
        ["Class 4", "₹9,170"],
        ["Class 5", "₹9,330"],
      ].map(([cls, fee]) => (
        <div
          key={cls}
          className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
        >
          <span className="font-medium">{cls}</span>

          <span className="font-bold text-green-700">
            {fee}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Middle School */}

  <div className="rounded-3xl bg-white p-8 shadow-lg border">
    <div className="mb-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
        <GraduationCap className="text-orange-600" size={30} />
      </div>

      <h3 className="text-2xl font-bold">
        Middle School
      </h3>

      <p className="text-gray-500">
        Class 6 - 8
      </p>
    </div>

    <div className="space-y-4">
      {[
        ["Class 6", "₹9,662"],
        ["Class 7", "₹10,142"],
        ["Class 8", "₹10,781"],
      ].map(([cls, fee]) => (
        <div
          key={cls}
          className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
        >
          <span className="font-medium">{cls}</span>

          <span className="font-bold text-orange-600">
            {fee}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Bottom Section */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Notes */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="mb-5 text-2xl font-bold">
              Important Notes
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Fees are payable annually.</li>
              <li>• Fees once paid are non-refundable.</li>
              <li>• Late fee charges may apply.</li>
              <li>• Contact the office for complete details.</li>
            </ul>
          </div>

          {/* Bus */}

          <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-lg">
            <div className="mb-5 flex items-center gap-3">
              <BusFront size={34} />

              <h3 className="text-2xl font-bold">
                Bus Facility Available
              </h3>
            </div>

            <p className="leading-8 text-blue-100">
              School transport is available on selected routes.
              Please contact the school office for route details
              and transportation charges.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default FeeStructure;