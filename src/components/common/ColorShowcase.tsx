import React from "react";

const ColorShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-sacred-cream min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-charcoal font-devanagari mb-2">
          भक्ति रंग संग्रह
        </h1>
        <p className="text-lg text-earth-dark">Sacred Color Palette</p>
      </div>

      {/* Saffron Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-saffron-darker font-devanagari">
          केसरिया रंग (Saffron Colors)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-saffron-light p-4 rounded-lg text-center border border-saffron">
            <div className="text-charcoal font-medium">Saffron Light</div>
            <div className="text-sm text-earth-dark">केसरिया हल्का</div>
          </div>
          <div className="bg-saffron p-4 rounded-lg text-center border border-saffron-dark">
            <div className="text-charcoal font-medium">Saffron</div>
            <div className="text-sm text-earth-dark">केसरिया</div>
          </div>
          <div className="bg-saffron-dark p-4 rounded-lg text-center border border-saffron-darker">
            <div className="text-sacred-white font-medium">Saffron Dark</div>
            <div className="text-sm text-sacred-cream">केसरिया गहरा</div>
          </div>
          <div className="bg-saffron-darker p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Saffron Darker</div>
            <div className="text-sm text-sacred-cream">केसरिया अधिक गहरा</div>
          </div>
        </div>
      </div>

      {/* Kumkum Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-kumkum-dark font-devanagari">
          कुमकुम रंग (Kumkum Colors)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-kumkum-light p-4 rounded-lg text-center border border-kumkum">
            <div className="text-charcoal font-medium">Kumkum Light</div>
            <div className="text-sm text-earth-dark">कुमकुम हल्का</div>
          </div>
          <div className="bg-kumkum p-4 rounded-lg text-center border border-kumkum-dark">
            <div className="text-sacred-white font-medium">Kumkum</div>
            <div className="text-sm text-sacred-cream">कुमकुम</div>
          </div>
          <div className="bg-kumkum-dark p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Kumkum Dark</div>
            <div className="text-sm text-sacred-cream">कुमकुम गहरा</div>
          </div>
          <div className="bg-sindoor p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Sindoor</div>
            <div className="text-sm text-sacred-cream">सिंदूर</div>
          </div>
        </div>
      </div>

      {/* Gold Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gold-dark font-devanagari">
          स्वर्ण रंग (Gold Colors)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gold-light p-4 rounded-lg text-center border border-gold">
            <div className="text-charcoal font-medium">Gold Light</div>
            <div className="text-sm text-earth-dark">सोना हल्का</div>
          </div>
          <div className="bg-gold p-4 rounded-lg text-center border border-gold-dark">
            <div className="text-charcoal font-medium">Gold</div>
            <div className="text-sm text-earth-dark">सोना</div>
          </div>
          <div className="bg-gold-dark p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Gold Dark</div>
            <div className="text-sm text-sacred-cream">सोना गहरा</div>
          </div>
          <div className="bg-turmeric p-4 rounded-lg text-center border border-gold">
            <div className="text-charcoal font-medium">Turmeric</div>
            <div className="text-sm text-earth-dark">हल्दी</div>
          </div>
        </div>
      </div>

      {/* Spiritual Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-peacock-blue font-devanagari">
          आध्यात्मिक रंग (Spiritual Colors)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-lotus-pink p-4 rounded-lg text-center">
            <div className="text-charcoal font-medium">Lotus Pink</div>
            <div className="text-sm text-earth-dark">कमल गुलाबी</div>
          </div>
          <div className="bg-lotus p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Lotus</div>
            <div className="text-sm text-sacred-cream">कमल</div>
          </div>
          <div className="bg-peacock-blue p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Peacock Blue</div>
            <div className="text-sm text-sacred-cream">मोर नील</div>
          </div>
          <div className="bg-tulsi-green p-4 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Tulsi Green</div>
            <div className="text-sm text-sacred-cream">तुलसी हरा</div>
          </div>
        </div>
      </div>

      {/* Gradient Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal font-devanagari">
          ग्रेडिएंट उदाहरण (Gradient Examples)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="gradient-saffron p-6 rounded-lg text-center">
            <div className="text-charcoal font-medium">Saffron Gradient</div>
            <div className="text-sm text-earth-dark font-devanagari">केसरिया ग्रेडिएंट</div>
          </div>
          <div className="gradient-kumkum p-6 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Kumkum Gradient</div>
            <div className="text-sm text-sacred-cream font-devanagari">कुमकुम ग्रेडिएंट</div>
          </div>
          <div className="gradient-gold p-6 rounded-lg text-center">
            <div className="text-charcoal font-medium">Gold Gradient</div>
            <div className="text-sm text-earth-dark font-devanagari">स्वर्ण ग्रेडिएंट</div>
          </div>
          <div className="gradient-sacred p-6 rounded-lg text-center">
            <div className="text-charcoal font-medium">Sacred Gradient</div>
            <div className="text-sm text-earth-dark font-devanagari">पवित्र ग्रेडिएंट</div>
          </div>
          <div className="gradient-sunset p-6 rounded-lg text-center">
            <div className="text-sacred-white font-medium">Sunset Gradient</div>
            <div className="text-sm text-sacred-cream font-devanagari">सूर्यास्त ग्रेडिएंट</div>
          </div>
          <div className="gradient-earth p-6 rounded-lg text-center">
            <div className="text-charcoal font-medium">Earth Gradient</div>
            <div className="text-sm text-earth-dark font-devanagari">पृथ्वी ग्रेडिएंट</div>
          </div>
        </div>
      </div>

      {/* Day Themes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal font-devanagari">
          दिन के रंग (Day Themes)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="sunday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-sacred-white font-medium">Sunday</div>
            <div className="text-xs text-sacred-cream font-devanagari">रविवार</div>
          </div>
          <div className="monday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-sacred-white font-medium">Monday</div>
            <div className="text-xs text-sacred-cream font-devanagari">सोमवार</div>
          </div>
          <div className="tuesday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-sacred-white font-medium">Tuesday</div>
            <div className="text-xs text-sacred-cream font-devanagari">मंगलवार</div>
          </div>
          <div className="wednesday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-sacred-white font-medium">Wednesday</div>
            <div className="text-xs text-sacred-cream font-devanagari">बुधवार</div>
          </div>
          <div className="thursday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-charcoal font-medium">Thursday</div>
            <div className="text-xs text-earth-dark font-devanagari">गुरुवार</div>
          </div>
          <div className="friday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-sacred-white font-medium">Friday</div>
            <div className="text-xs text-sacred-cream font-devanagari">शुक्रवार</div>
          </div>
          <div className="saturday-theme p-4 rounded-lg text-center h-24 flex flex-col justify-end">
            <div className="text-sacred-white font-medium">Saturday</div>
            <div className="text-xs text-sacred-cream font-devanagari">शनिवार</div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal font-devanagari">
          उपयोग के उदाहरण (Usage Examples)
        </h2>
        <div className="space-y-4">
          <div className="festival-bg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-charcoal font-devanagari mb-2">
              त्यौहार पृष्ठभूमि (Festival Background)
            </h3>
            <p className="text-earth-dark">Perfect for highlighting festivals and special occasions.</p>
          </div>
          <div className="auspicious-bg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-charcoal font-devanagari mb-2">
              शुभ पृष्ठभूमि (Auspicious Background)
            </h3>
            <p className="text-earth-dark">Ideal for auspicious dates and important events.</p>
          </div>
          <div className="sacred-bg p-6 rounded-lg border border-sandalwood">
            <h3 className="text-xl font-bold text-charcoal font-devanagari mb-2">
              पवित्र पृष्ठभूमि (Sacred Background)
            </h3>
            <p className="text-earth-dark">Subtle background for regular content and text areas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase;
