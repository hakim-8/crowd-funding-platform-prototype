"use client";

import { useState } from "react";
import { CheckCircle, FileText, User, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Stage5Review({
  issuerData,
  repsData,
  docsData,
  onEditSection,
  onSubmit,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <CheckCircle className="mx-auto h-12 w-12 text-[#064e3b]" />
        <h3 className="mt-4 text-xl font-medium text-gray-900">
          Review & Attest
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Please review all the information you have provided. By submitting,
          you attest that the information is accurate and complete.
        </p>
      </div>

      <div className="space-y-6">
        {/* Section 1: Entity */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 relative">
          <button
            onClick={() => onEditSection(1)}
            className="absolute top-6 right-6 text-sm font-medium text-[#064e3b] hover:underline"
          >
            Edit
          </button>
          <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">
            Entity & Jurisdiction
          </h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
            <div>
              <dt className="text-gray-500">Legal Entity Name</dt>
              <dd className="font-medium text-gray-900">
                {issuerData.legal_entity_name}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Country / City</dt>
              <dd className="font-medium text-gray-900">
                {issuerData.country} / {issuerData.city}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Business Type</dt>
              <dd className="font-medium text-gray-900">
                {issuerData.business_type}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Contact</dt>
              <dd className="font-medium text-gray-900">
                {issuerData.business_email} | {issuerData.business_phone_number}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Registration Authority</dt>
              <dd className="font-medium text-gray-900">
                {issuerData.license_authority}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Trade License Number</dt>
              <dd className="font-medium text-gray-900">
                {issuerData.trade_license_number}
              </dd>
            </div>
          </dl>
        </div>

        {/* Section 2: Reps */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 relative">
          <button
            onClick={() => onEditSection(2)}
            className="absolute top-6 right-6 text-sm font-medium text-[#064e3b] hover:underline"
          >
            Edit
          </button>
          <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">
            Authorized Representatives
          </h4>
          <div className="space-y-4">
            {repsData.map((rep, idx) => (
              <div
                key={rep.id || idx}
                className="flex items-center text-sm border-b pb-2 last:border-0 last:pb-0"
              >
                <User className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">
                    {rep.full_name}{" "}
                    <span className="text-gray-500 font-normal">
                      ({rep.id_type}: {rep.id_number})
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {[
                      rep.is_authorized_signatory && "Signatory",
                      rep.is_director && "Director",
                      rep.is_ubo && `UBO (${rep.ubo_percentage}%)`,
                      rep.other_designation,
                    ]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Docs */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 relative">
          <button
            onClick={() => onEditSection(3)}
            className="absolute top-6 right-6 text-sm font-medium text-[#064e3b] hover:underline"
          >
            Edit
          </button>
          <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">
            Documents
          </h4>
          <ul className="divide-y divide-gray-200">
            {docsData.map((doc, idx) => (
              <li
                key={doc.id || idx}
                className="py-2 flex items-center justify-between text-sm"
              >
                <div className="flex items-center">
                  <FileText className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="font-medium text-gray-900 capitalize">
                    {doc.doc_type.replace(/_/g, " ")}
                  </span>
                </div>
                <span className="text-green-600 font-medium">Uploaded</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Banking */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 relative">
          <button
            onClick={() => onEditSection(4)}
            className="absolute top-6 right-6 text-sm font-medium text-[#064e3b] hover:underline"
          >
            Edit
          </button>
          <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">
            Banking Details
          </h4>
          {issuerData.bank_details && (
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
              <div>
                <dt className="text-gray-500">Bank Name</dt>
                <dd className="font-medium text-gray-900">
                  {issuerData.bank_details.bank_name}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Account Holder</dt>
                <dd className="font-medium text-gray-900">
                  {issuerData.bank_details.account_holder_name}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-gray-500">IBAN</dt>
                <dd className="font-medium text-gray-900 font-mono tracking-wider">
                  {issuerData.bank_details.iban}
                </dd>
              </div>
            </dl>
          )}
        </div>
      </div>

      <div className="pt-8 space-y-6 border-t border-gray-200 mt-8">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent1"
                type="checkbox"
                checked={consent1}
                onChange={(e) => setConsent1(e.target.checked)}
                className="w-4 h-4 text-[#064e3b] border-gray-300 rounded focus:ring-[#064e3b]"
              />
            </div>
            <label htmlFor="consent1" className="ml-3 text-sm text-gray-700">
              I confirm that I am authorized to submit this application and bind{" "}
              <strong>{issuerData.legal_entity_name || "this entity"}</strong>{" "}
              to the agreements below and that all information and documents
              submitted in this application are true, accurate, and complete to
              the best of my knowledge.
            </label>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent2"
                type="checkbox"
                checked={consent2}
                onChange={(e) => setConsent2(e.target.checked)}
                className="w-4 h-4 text-[#064e3b] border-gray-300 rounded focus:ring-[#064e3b]"
              />
            </div>
            <label htmlFor="consent2" className="ml-3 text-sm text-gray-700">
              I have read and accepted the{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                terms and conditions of Jade Fortune
              </Link>
              .
            </label>
          </div>
        </div>

        <button
          type="button"
          disabled={isSubmitting || !consent1 || !consent2}
          onClick={async () => {
            setIsSubmitting(true);
            try {
              await onSubmit();
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#064e3b] hover:bg-[#064e3b]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064e3b] disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting
              Application...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </div>
  );
}
