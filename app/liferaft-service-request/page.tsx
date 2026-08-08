"use client";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const companyName = formData.get("companyName");
    const vesselName = formData.get("vesselName");
    const streetAddress = formData.get("streetAddress");
    const city = formData.get("city");
    const month = formData.get("month");
    const day = formData.get("day");
    const year = formData.get("year");
    const comments = formData.get("comments");
    const service = formData.get("service");

    const formDetails = {
      name,
      email,
      phone,
      country,
      companyName,
      vesselName,
      streetAddress,
      city,
      month,
      day,
      year,
      service,
      comments,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "https://app.proforms.top/f/pr45a06a7",
        formDetails,
      );
      if (res.status === 200) return toast("✅ Request submitted!");
    } catch (error) {
      return toast("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/boat-2.webp"
          alt="Service request"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Book a Service
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Repair / Services Request Form
          </h1>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <p className="text-slate-500 text-sm mb-8">
            Fill in the details below and our team will get back to you promptly.
          </p>

          <form
            onSubmit={handleFormSubmit}
            className="bg-slate-50 rounded-2xl border border-slate-100 p-6 lg:p-10 flex flex-col gap-5"
          >
            {/* Your Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-600 mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-medium text-slate-600 mb-1.5">
                Company&apos;s Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Company name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* Vessel Name */}
            <div>
              <label htmlFor="vesselName" className="block text-xs font-medium text-slate-600 mb-1.5">
                Vessel / Boat Name
              </label>
              <input
                id="vesselName"
                name="vesselName"
                type="text"
                placeholder="Vessel or boat name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-slate-600 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                required
                placeholder="+234..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* Street Address */}
            <div>
              <label htmlFor="streetAddress" className="block text-xs font-medium text-slate-600 mb-1.5">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                id="streetAddress"
                name="streetAddress"
                type="text"
                required
                placeholder="Street address"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-xs font-medium text-slate-600 mb-1.5">
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                placeholder="City"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-xs font-medium text-slate-600 mb-1.5">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
              >
                <option value="">Select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China, People's Republic of">
                  China, People&apos;s Republic of
                </option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo, Democratic Republic of the">
                  Congo, Democratic Republic of the
                </option>
                <option value="Congo, Republic of the">
                  Congo, Republic of the
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Côte d'Ivoire">Côte d&apos;Ivoire</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="France, Metropolitan">
                  France, Metropolitan
                </option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French South Territories">
                  French South Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island And Mcdonald Island">
                  Heard Island And Mcdonald Island
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Johnston Island">Johnston Island</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People&apos;s Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People&apos;s Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine, State of">Palestine, State of</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn Islands">Pitcairn Islands</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion Island">Reunion Island</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre & Miquelon">
                  Saint Pierre &amp; Miquelon
                </option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Sint Maarten">Sint Maarten</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and South Sandwich">
                  South Georgia and South Sandwich
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Stateless Persons">Stateless Persons</option>
                <option value="Sudan">Sudan</option>
                <option value="Sudan, South">Sudan, South</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan, Republic of China">
                  Taiwan, Republic of China
                </option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks And Caicos Islands">
                  Turks And Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="US Minor Outlying Islands">
                  US Minor Outlying Islands
                </option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States of America (USA)">
                  United States of America (USA)
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S.">
                  Virgin Islands, U.S.
                </option>
                <option value="Wallis And Futuna Islands">
                  Wallis And Futuna Islands
                </option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="brandOfLiferaft" className="block text-xs font-medium text-slate-600 mb-1.5">
                Type of Service <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                required
                name="service"
              >
                <option value="">Select service</option>
                <option value="Fiberglass Repairs">Fiberglass Repairs</option>
                <option value="Marine Safety Equipment & Ship Maintenance Parts">
                  Marine Safety Equipment & Ship Maintenance Parts
                </option>
                <option value="Calibration of equipment">
                  Calibration of equipment
                </option>
                <option value="Inflatable Liferaft Rental">
                  Inflatable Liferaft Rental
                </option>
                <option value="Foam Analysis and Air quality test">
                  Foam Analysis and Air quality test
                </option>
                <option value="LSA/FFA Inspection and Re-Certification">
                  LSA/FFA Inspection and Re-Certification
                </option>
              </select>
            </div>

            {/* Date Service Required */}
            <fieldset className="border border-slate-200 rounded-xl p-4 bg-white">
              <legend className="px-2 text-xs font-medium text-slate-600">
                Date Service Required <span className="text-red-500">*</span>
              </legend>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <label htmlFor="month" className="block text-xs text-slate-500 mb-1">Month <span className="text-red-500">*</span></label>
                  <input
                    id="month"
                    name="month"
                    type="number"
                    min={1}
                    max={12}
                    placeholder="MM"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
                <div>
                  <label htmlFor="day" className="block text-xs text-slate-500 mb-1">Day <span className="text-red-500">*</span></label>
                  <input
                    id="day"
                    name="day"
                    type="number"
                    min={1}
                    max={31}
                    placeholder="DD"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-xs text-slate-500 mb-1">Year <span className="text-red-500">*</span></label>
                  <input
                    id="year"
                    name="year"
                    type="number"
                    min={2024}
                    placeholder="YYYY"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
              </div>
            </fieldset>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className="block text-xs font-medium text-slate-600 mb-1.5">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={5}
                placeholder="Additional details about your service request..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition resize-none"
              />
            </div>

            {/* reCAPTCHA notice */}
            <div className="rounded-lg border border-dashed border-slate-200 p-4 text-xs text-slate-400">
              <span className="font-medium text-slate-500">reCAPTCHA:</span> Add your v2 Invisible or v3 integration here.
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                disabled={loading}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#5200f5] hover:bg-[#4400cc] disabled:opacity-60 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25"
              >
                Submit Request
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
