#ifndef BACKEND_COLORCONVERTER_H
#define BACKEND_COLORCONVERTER_H

#include "math.h"
#include "LedController.h"

static struct ColorConverter {

    Color hsvToRgb(unsigned int h, unsigned char s, unsigned char v){

        unsigned char r, g, b;
        unsigned char diff;

        if(h<61){
            r = 255;
            b = 0;
            g = (425 * h) / 100;
        }else if(h < 121){
            g = 255;
            b = 0;
            r = 255 - ((425 * (h-60))/100);
        }else if(h < 181){
            r = 0;
            g = 255;
            b = (425 * (h-120))/100;
        }else if(h < 241){
            r = 0;
            b = 255;
            g = 255 - ((425 * (h-180))/100);
        }else if(h < 301){
            g = 0;
            b = 255;
            r = (425 * (h-240))/100;
        }else if(h< 360){
            r = 255;
            g = 0;
            b = 255 - ((425 * (h-300))/100);
        }

        s = 100 - s;
        diff = ((255 - r) * s)/100;
        r = r + diff;
        diff = ((255 - g) * s)/100;
        g = g + diff;
        diff = ((255 - b) * s)/100;
        b = b + diff;

        r = (r * v)/100;
        g = (g * v)/100;
        b = (b * v)/100;
        Color color{r, g, b};
        return color;
    }

    std::vector<unsigned> rgbToHsv(Color c){
        double min, max, delta;

        double h, s, v;

        min = c.red < c.green ? c.red : c.green;
        min = min  < c.blue ? min  : c.blue;
        max = c.red > c.green ? c.red : c.green;
        max = max  > c.blue ? max  : c.blue;

        v = max;
        delta = max - min;
        if (delta < 0.00001) {
            s = 0;
            h = 0;
            return {(unsigned)h, (unsigned)(s*100), (unsigned)(v/255)};
        }
        if( max > 0.0 ) {
            s = (delta / max);
        } else {
            s = 0.0;
            h = NAN;
            return {(unsigned)h, (unsigned)(s*100), (unsigned)(v/255)};
        }
        if( c.red >= max )
            h = ( c.green - c.blue ) / delta;
        else if( c.green >= max )
            h = 2.0 + ( c.blue - c.red ) / delta;
        else
            h = 4.0 + ( c.red - c.green ) / delta;

        h *= 60.0;

        if( h < 0.0 )
            h += 360.0;

        return {(unsigned)h, (unsigned)(s*100), (unsigned)(v/255*100)};
    }


} colorConverter;


#endif //BACKEND_COLORCONVERTER_H
