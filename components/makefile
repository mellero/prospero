OUTDIR=../dist
STYLE=sass/style.scss
STYLES=$(wildcard sass/*.scss)
STYLE_OUT=$(OUTDIR)/style.css

# Title placeholder in head.html to be replaced by each individual page
PLCHOLDER=This is a placeholder title

# Landing
COMBINE_LAN=landing/combine.sed
LANDING=../templates/landing-sk.html
LAND_OUT=$(OUTDIR)/landing.html
LAND_PANEL=landing/panel.html
LAND_PANEL_SK=landing/panel-sk.html

# Results
COMBINE_RES=results/combine.sed
RESULTS_SK=../templates/results-sk.html
RES_OUT=$(OUTDIR)/results.html
RES_PANEL=results/panel.html
RES_PANEL_SK=results/results-panel-sk.html
RES_DEPS=results/sort-bar.html results/result-card.html

# Product
PRODUCT=../templates/product-sk.html
PROD_OUT=$(OUTDIR)/product.html

# Common
COMBINE_COM=common/combine.sed
COMMON=$(wildcard common/*.html)
COM_SUBPANEL=common/subpanel.sed


all: $(LAND_OUT) $(RES_OUT) $(PROD_OUT)

$(RES_OUT): combine.sed $(RESULTS_SK) $(COMMON) $(RES_PANEL) $(RES_DEPS) $(STYLE_OUT)
	sed -f combine.sed $(RESULTS_SK) > $(RES_OUT)
	sed -i -e "s/$(PLCHOLDER)/Search Results/" $(RES_OUT)

$(LAND_OUT): combine.sed $(LANDING) $(COMMON) $(LAND_PANEL) $(STYLE_OUT)
	sed -f combine.sed $(LANDING) > $(LAND_OUT)
	sed -i -e "s/$(PLCHOLDER)/Prospero Gaming - Selling nerd crap since 1993/" $(LAND_OUT)

$(PROD_OUT): combine.sed $(PRODUCT) $(COMMON) $(STYLE_OUT)
	sed -f combine.sed $(PRODUCT) > $(PROD_OUT)
	sed -i -e "s/$(PLCHOLDER)/Warhammer Leather Journal/" $(PROD_OUT)

$(STYLE_OUT): $(STYLES)
	sass --no-source-map $(STYLE) $(STYLE_OUT)

$(RES_PANEL): $(RES_PANEL_SK)
	sed -f $(COM_SUBPANEL) $(RES_PANEL_SK) > $(RES_PANEL)

$(LAND_PANEL): $(LAND_PANEL_SK)
	sed -f $(COM_SUBPANEL) $(LAND_PANEL_SK) > $(LAND_PANEL)

combine.sed: $(COMBINE_RES) $(COMBINE_LAN) $(COMBINE_COM)
	cat $(COMBINE_RES) $(COMBINE_LAN) $(COMBINE_COM) > combine.sed

