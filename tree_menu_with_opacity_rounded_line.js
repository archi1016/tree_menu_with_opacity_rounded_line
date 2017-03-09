

function MenuWithOrl() {
}

	MenuWithOrl.prototype.recount_tree_line_position = function (ul) {
		var chds = ul.childNodes;
		var i;
		var span;
		var last_li;

		for (i=0; i<chds.length; i++) {
			if ('LI' == chds[i].nodeName) {
				ul = this.get_first_child(chds[i], 'UL');
				if (ul) {
					span = ul.nextSibling;
					if (span) {
						last_li = this.get_last_child(ul, 'LI');
						if (this.get_first_child(last_li, 'UL')) {
							span.style.height = (span.clientHeight - last_li.clientHeight) + 'px';
							last_li = this.get_previous_node(last_li, 'LI');
						}
						this.insert_class(last_li.firstChild, 'last');
					}
			 		this.recount_tree_line_position(ul);
				}
			}
		}
	};
	MenuWithOrl.prototype.get_first_child = function (e, n) {
		var chds = e.childNodes;
		var i;
			
		for (i=0; i<chds.length; i++) {
			if (n == chds[i].nodeName) return chds[i];
		}
		return null;
	};
	MenuWithOrl.prototype.get_last_child = function (e, n) {
		var chds = e.childNodes;
		var i;
			
		for (i=chds.length-1; i>=0; i--) {
			if (n == chds[i].nodeName) return chds[i];
		}
		return null;
	};
	MenuWithOrl.prototype.get_next_node = function (e, n) {
		e = e.nextSibling;
		while (e) {
			if (n == e.nodeName) return e;
			e = e.nextSibling;
		}
		return null;
	};
	MenuWithOrl.prototype.get_previous_node = function (e, n) {
		e = e.previousSibling;
		while (e) {
			if (n == e.nodeName) return e;
			e = e.previousSibling;
		}
		return null;
	};
	MenuWithOrl.prototype.has_class = function (e, c) {
		return (-1 != e.className.indexOf(c));
	};
	MenuWithOrl.prototype.insert_class = function (e, c) {
		if (!this.has_class(e, c)) e.className += ' ' + c;
	};
	MenuWithOrl.prototype.remove_class = function (e, c) {
		var s = e.className;
		
		e.className = s.replace(' ' + c, '');
	};
