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


} colorConverter;


#endif //BACKEND_COLORCONVERTER_H
