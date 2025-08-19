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
    //country goes here
    const month = formData.get("month");
    const day = formData.get("day");
    const year = formData.get("year");
    const comments = formData.get("comments");

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
      comments,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "https://app.proforms.top/f/pr45a06a7",
        formDetails
      );
      console.log("submision data:", res);
      if (res.status === 200) return toast("form Submited");
    } catch (error) {
      console.log(error);
      return toast("something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[30%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-3xl lg:text-7xl">
            Liferaft Service Request Form
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[100px] lg:h-[280px] object-cover"
        />
      </div>
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl font-[lato] shadow p-6 md:p-8 space-y-6"
          >
            {/* Your Name (required) */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-900"
              >
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-neutral-900"
              >
                Company&apos;s Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Vessel/Boat Name */}
            <div>
              <label
                htmlFor="vesselName"
                className="block text-sm font-medium text-neutral-900"
              >
                Vessel/Boat Name
              </label>
              <input
                id="vesselName"
                name="vesselName"
                type="text"
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Email (required) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-900"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Phone (required) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-900"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Street Address (required) */}
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-neutral-900"
              >
                Street Address <span className="text-red-600">*</span>
              </label>
              <input
                id="streetAddress"
                name="streetAddress"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* City (required) */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-neutral-900"
              >
                City <span className="text-red-600">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Country (required) */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-neutral-900"
              >
                Country <span className="text-red-600">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
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

            {/* Brand of Liferaft (required) */}
            <div>
              <label
                htmlFor="brandOfLiferaft"
                className="block text-sm font-medium text-neutral-900"
              >
                Brand of Liferaft <span className="text-red-600">*</span>
              </label>
              <input
                id="brandOfLiferaft"
                name="brandOfLiferaft"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Date Service Required (required 3-part) */}
            <fieldset className="border border-gray-200 rounded-xl p-4">
              <legend className="px-2 text-sm font-medium text-neutral-900">
                Date Service Required <span className="text-red-600">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="month"
                    className="block text-sm text-neutral-900"
                  >
                    Month <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="month"
                    name="month"
                    type="number"
                    min={1}
                    max={12}
                    placeholder="E.g. 01"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="day" className="block text-sm text-gray-700">
                    Day <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="day"
                    name="day"
                    type="number"
                    min={1}
                    max={31}
                    placeholder="E.g. 01"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm text-gray-700">
                    Year <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="year"
                    name="year"
                    type="number"
                    min={1}
                    placeholder="E.g. 2000"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </fieldset>

            {/* Comments */}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={6}
                className="mt-1 block w-full rounded-lg border border-neutral-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* File Upload (Last Service Certificates) */}
            {/* <div>
              <label
                htmlFor="certificate"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Last Service Certificates
              </label>
              <input
                id="certificate"
                name="certificate"
                type="file"
                className="mt-1 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-green-600 file:px-4 file:py-2 file:text-white hover:file:bg-green-700"
                // Same accept list as original (very broad)
                accept=".jpg,.jpeg,.jpe,.gif,.png,.bmp,.tiff,.tif,.webp,.avif,.ico,.heic,.asf,.asx,.wmv,.wmx,.wm,.avi,.divx,.flv,.mov,.qt,.mpeg,.mpg,.mpe,.mp4,.m4v,.ogv,.webm,.mkv,.3gp,.3gpp,.3g2,.3gp2,.txt,.asc,.c,.cc,.h,.srt,.csv,.tsv,.ics,.rtx,.vtt,.mp3,.m4a,.m4b,.aac,.ra,.ram,.wav,.ogg,.oga,.flac,.mid,.midi,.wma,.wax,.mka,.rtf,.pdf,.class,.tar,.zip,.gz,.gzip,.7z,.psd,.xcf,.doc,.pot,.pps,.ppt,.wri,.xla,.xls,.xlt,.xlw,.mdb,.mpp,.docx,.docm,.dotx,.dotm,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlam,.pptx,.pptm,.ppsx,.ppsm,.potx,.potm,.ppam,.sldx,.sldm,.onetoc,.onetoc2,.onetmp,.onepkg,.oxps,.xps,.odt,.odp,.ods,.odg,.odc,.odb,.odf,.wp,.wpd,.key,.numbers,.pages,.svgz,.ttf,.eot,.woff,.woff2"
              />
              {file && (
                <p className="mt-2 text-xs text-gray-600">
                  Selected: {file.name}
                </p>
              )}
            </div> */}

            {/* reCAPTCHA placeholder (implement with your own site key) */}
            <div className="rounded-lg border border-dashed border-neutral-800 p-4 text-sm text-gray-600">
              <span className="font-medium">reCAPTCHA:</span> Add your v2
              Invisible or v3 integration here (client script + server
              verification).
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                disabled={loading}
                type="submit"
                className=" flex items-center justify-center  gap-1 w-full rounded-lg bg-green-600  py-3 font-medium text-white transition hover:bg-green-700 disabled:opacity-60"
              >
                Submit
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
