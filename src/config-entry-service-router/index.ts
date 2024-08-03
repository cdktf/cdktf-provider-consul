// https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigEntryServiceRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies key-value pairs to add to the KV store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Specifies a name for the configuration entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}
  */
  readonly name: string;
  /**
  * Specifies the namespace to apply the configuration entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the admin partition to apply the configuration entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}
  */
  readonly partition?: string;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}
  */
  readonly routes?: ConfigEntryServiceRouterRoutes[] | cdktf.IResolvable;
}
export interface ConfigEntryServiceRouterRoutesDestinationRequestHeaders {
  /**
  * Defines a set of key-value pairs to add to the header. Use header names as the keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Defines a list of headers to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}
  */
  readonly remove?: string[];
  /**
  * Defines a set of key-value pairs to add to the request header or to replace existing header values with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}
  */
  readonly set?: { [key: string]: string };
}

export function configEntryServiceRouterRoutesDestinationRequestHeadersToTerraform(struct?: ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference | ConfigEntryServiceRouterRoutesDestinationRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function configEntryServiceRouterRoutesDestinationRequestHeadersToHclTerraform(struct?: ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference | ConfigEntryServiceRouterRoutesDestinationRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesDestinationRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesDestinationRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface ConfigEntryServiceRouterRoutesDestinationResponseHeaders {
  /**
  * Defines a set of key-value pairs to add to the header. Use header names as the keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Defines a list of headers to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}
  */
  readonly remove?: string[];
  /**
  * Defines a set of key-value pairs to add to the response header or to replace existing header values with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}
  */
  readonly set?: { [key: string]: string };
}

export function configEntryServiceRouterRoutesDestinationResponseHeadersToTerraform(struct?: ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference | ConfigEntryServiceRouterRoutesDestinationResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function configEntryServiceRouterRoutesDestinationResponseHeadersToHclTerraform(struct?: ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference | ConfigEntryServiceRouterRoutesDestinationResponseHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesDestinationResponseHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesDestinationResponseHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface ConfigEntryServiceRouterRoutesDestination {
  /**
  * Specifies the total amount of time permitted for the request stream to be idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#idle_timeout ConfigEntryServiceRouter#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Specifies the Consul namespace to resolve the service from instead of the current namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the number of times to retry the request when a retry condition occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#num_retries ConfigEntryServiceRouter#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies the Consul admin partition to resolve the service from instead of the current partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}
  */
  readonly partition?: string;
  /**
  * Specifies rewrites to the HTTP request path before proxying it to its final destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix_rewrite ConfigEntryServiceRouter#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_timeout ConfigEntryServiceRouter#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Specifies a list of conditions for Consul to retry requests based on the response from an upstream service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on ConfigEntryServiceRouter#retry_on}
  */
  readonly retryOn?: string[];
  /**
  * Specifies that connection failure errors that trigger a retry request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_connect_failure ConfigEntryServiceRouter#retry_on_connect_failure}
  */
  readonly retryOnConnectFailure?: boolean | cdktf.IResolvable;
  /**
  * Specifies a list of integers for HTTP response status codes that trigger a retry request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_status_codes ConfigEntryServiceRouter#retry_on_status_codes}
  */
  readonly retryOnStatusCodes?: number[];
  /**
  * Specifies the name of the service to resolve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service ConfigEntryServiceRouter#service}
  */
  readonly service?: string;
  /**
  * Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service_subset ConfigEntryServiceRouter#service_subset}
  */
  readonly serviceSubset?: string;
  /**
  * request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_headers ConfigEntryServiceRouter#request_headers}
  */
  readonly requestHeaders?: ConfigEntryServiceRouterRoutesDestinationRequestHeaders;
  /**
  * response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#response_headers ConfigEntryServiceRouter#response_headers}
  */
  readonly responseHeaders?: ConfigEntryServiceRouterRoutesDestinationResponseHeaders;
}

export function configEntryServiceRouterRoutesDestinationToTerraform(struct?: ConfigEntryServiceRouterRoutesDestinationOutputReference | ConfigEntryServiceRouterRoutesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    partition: cdktf.stringToTerraform(struct!.partition),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    retry_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryOn),
    retry_on_connect_failure: cdktf.booleanToTerraform(struct!.retryOnConnectFailure),
    retry_on_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.retryOnStatusCodes),
    service: cdktf.stringToTerraform(struct!.service),
    service_subset: cdktf.stringToTerraform(struct!.serviceSubset),
    request_headers: configEntryServiceRouterRoutesDestinationRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: configEntryServiceRouterRoutesDestinationResponseHeadersToTerraform(struct!.responseHeaders),
  }
}


export function configEntryServiceRouterRoutesDestinationToHclTerraform(struct?: ConfigEntryServiceRouterRoutesDestinationOutputReference | ConfigEntryServiceRouterRoutesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_on_connect_failure: {
      value: cdktf.booleanToHclTerraform(struct!.retryOnConnectFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_on_status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.retryOnStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_subset: {
      value: cdktf.stringToHclTerraform(struct!.serviceSubset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: configEntryServiceRouterRoutesDestinationRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesDestinationRequestHeadersList",
    },
    response_headers: {
      value: configEntryServiceRouterRoutesDestinationResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesDestinationResponseHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    if (this._retryOnConnectFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnConnectFailure = this._retryOnConnectFailure;
    }
    if (this._retryOnStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnStatusCodes = this._retryOnStatusCodes;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubset = this._serviceSubset;
    }
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeout = undefined;
      this._namespace = undefined;
      this._numRetries = undefined;
      this._partition = undefined;
      this._prefixRewrite = undefined;
      this._requestTimeout = undefined;
      this._retryOn = undefined;
      this._retryOnConnectFailure = undefined;
      this._retryOnStatusCodes = undefined;
      this._service = undefined;
      this._serviceSubset = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeout = value.idleTimeout;
      this._namespace = value.namespace;
      this._numRetries = value.numRetries;
      this._partition = value.partition;
      this._prefixRewrite = value.prefixRewrite;
      this._requestTimeout = value.requestTimeout;
      this._retryOn = value.retryOn;
      this._retryOnConnectFailure = value.retryOnConnectFailure;
      this._retryOnStatusCodes = value.retryOnStatusCodes;
      this._service = value.service;
      this._serviceSubset = value.serviceSubset;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
    }
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string[]; 
  public get retryOn() {
    return this.getListAttribute('retry_on');
  }
  public set retryOn(value: string[]) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }

  // retry_on_connect_failure - computed: false, optional: true, required: false
  private _retryOnConnectFailure?: boolean | cdktf.IResolvable; 
  public get retryOnConnectFailure() {
    return this.getBooleanAttribute('retry_on_connect_failure');
  }
  public set retryOnConnectFailure(value: boolean | cdktf.IResolvable) {
    this._retryOnConnectFailure = value;
  }
  public resetRetryOnConnectFailure() {
    this._retryOnConnectFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnConnectFailureInput() {
    return this._retryOnConnectFailure;
  }

  // retry_on_status_codes - computed: false, optional: true, required: false
  private _retryOnStatusCodes?: number[]; 
  public get retryOnStatusCodes() {
    return this.getNumberListAttribute('retry_on_status_codes');
  }
  public set retryOnStatusCodes(value: number[]) {
    this._retryOnStatusCodes = value;
  }
  public resetRetryOnStatusCodes() {
    this._retryOnStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnStatusCodesInput() {
    return this._retryOnStatusCodes;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_subset - computed: false, optional: true, required: false
  private _serviceSubset?: string; 
  public get serviceSubset() {
    return this.getStringAttribute('service_subset');
  }
  public set serviceSubset(value: string) {
    this._serviceSubset = value;
  }
  public resetServiceSubset() {
    this._serviceSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubsetInput() {
    return this._serviceSubset;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: ConfigEntryServiceRouterRoutesDestinationRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: ConfigEntryServiceRouterRoutesDestinationResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }
}
export interface ConfigEntryServiceRouterRoutesMatchHttpHeader {
  /**
  * Specifies that a request matches when the header with the given name is this exact value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}
  */
  readonly exact?: string;
  /**
  * Specifies that the logic for the HTTP header match should be inverted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#invert ConfigEntryServiceRouter#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the HTTP header to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}
  */
  readonly name?: string;
  /**
  * Specifies that a request matches when the header with the given name has this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix ConfigEntryServiceRouter#prefix}
  */
  readonly prefix?: string;
  /**
  * Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Specifies that a request matches when the header with the given name matches this regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}
  */
  readonly regex?: string;
  /**
  * Specifies that a request matches when the header with the given name has this suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#suffix ConfigEntryServiceRouter#suffix}
  */
  readonly suffix?: string;
}

export function configEntryServiceRouterRoutesMatchHttpHeaderToTerraform(struct?: ConfigEntryServiceRouterRoutesMatchHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function configEntryServiceRouterRoutesMatchHttpHeaderToHclTerraform(struct?: ConfigEntryServiceRouterRoutesMatchHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesMatchHttpHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesMatchHttpHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._invert = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._present = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._invert = value.invert;
      this._name = value.name;
      this._prefix = value.prefix;
      this._present = value.present;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class ConfigEntryServiceRouterRoutesMatchHttpHeaderList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceRouterRoutesMatchHttpHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference {
    return new ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceRouterRoutesMatchHttpQueryParam {
  /**
  * Specifies that a request matches when the query parameter with the given name is this exact value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}
  */
  readonly exact?: string;
  /**
  * Specifies the name of the HTTP query parameter to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}
  */
  readonly name?: string;
  /**
  * Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Specifies that a request matches when the query parameter with the given name matches this regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}
  */
  readonly regex?: string;
}

export function configEntryServiceRouterRoutesMatchHttpQueryParamToTerraform(struct?: ConfigEntryServiceRouterRoutesMatchHttpQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    name: cdktf.stringToTerraform(struct!.name),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function configEntryServiceRouterRoutesMatchHttpQueryParamToHclTerraform(struct?: ConfigEntryServiceRouterRoutesMatchHttpQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesMatchHttpQueryParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesMatchHttpQueryParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._name = undefined;
      this._present = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._name = value.name;
      this._present = value.present;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ConfigEntryServiceRouterRoutesMatchHttpQueryParamList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceRouterRoutesMatchHttpQueryParam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference {
    return new ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceRouterRoutesMatchHttp {
  /**
  * Specifies HTTP methods that the match applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#methods ConfigEntryServiceRouter#methods}
  */
  readonly methods?: string[];
  /**
  * Specifies the exact path to match on the HTTP request path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_exact ConfigEntryServiceRouter#path_exact}
  */
  readonly pathExact?: string;
  /**
  * Specifies the path prefix to match on the HTTP request path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_prefix ConfigEntryServiceRouter#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Specifies a regular expression to match on the HTTP request path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_regex ConfigEntryServiceRouter#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#header ConfigEntryServiceRouter#header}
  */
  readonly header?: ConfigEntryServiceRouterRoutesMatchHttpHeader[] | cdktf.IResolvable;
  /**
  * query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#query_param ConfigEntryServiceRouter#query_param}
  */
  readonly queryParam?: ConfigEntryServiceRouterRoutesMatchHttpQueryParam[] | cdktf.IResolvable;
}

export function configEntryServiceRouterRoutesMatchHttpToTerraform(struct?: ConfigEntryServiceRouterRoutesMatchHttpOutputReference | ConfigEntryServiceRouterRoutesMatchHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path_exact: cdktf.stringToTerraform(struct!.pathExact),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    header: cdktf.listMapper(configEntryServiceRouterRoutesMatchHttpHeaderToTerraform, true)(struct!.header),
    query_param: cdktf.listMapper(configEntryServiceRouterRoutesMatchHttpQueryParamToTerraform, true)(struct!.queryParam),
  }
}


export function configEntryServiceRouterRoutesMatchHttpToHclTerraform(struct?: ConfigEntryServiceRouterRoutesMatchHttpOutputReference | ConfigEntryServiceRouterRoutesMatchHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_exact: {
      value: cdktf.stringToHclTerraform(struct!.pathExact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(configEntryServiceRouterRoutesMatchHttpHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesMatchHttpHeaderList",
    },
    query_param: {
      value: cdktf.listMapperHcl(configEntryServiceRouterRoutesMatchHttpQueryParamToHclTerraform, true)(struct!.queryParam),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesMatchHttpQueryParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesMatchHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesMatchHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._pathExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExact = this._pathExact;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParam = this._queryParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesMatchHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._pathExact = undefined;
      this._pathPrefix = undefined;
      this._pathRegex = undefined;
      this._header.internalValue = undefined;
      this._queryParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._pathExact = value.pathExact;
      this._pathPrefix = value.pathPrefix;
      this._pathRegex = value.pathRegex;
      this._header.internalValue = value.header;
      this._queryParam.internalValue = value.queryParam;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_exact - computed: false, optional: true, required: false
  private _pathExact?: string; 
  public get pathExact() {
    return this.getStringAttribute('path_exact');
  }
  public set pathExact(value: string) {
    this._pathExact = value;
  }
  public resetPathExact() {
    this._pathExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExactInput() {
    return this._pathExact;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ConfigEntryServiceRouterRoutesMatchHttpHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ConfigEntryServiceRouterRoutesMatchHttpHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_param - computed: false, optional: true, required: false
  private _queryParam = new ConfigEntryServiceRouterRoutesMatchHttpQueryParamList(this, "query_param", false);
  public get queryParam() {
    return this._queryParam;
  }
  public putQueryParam(value: ConfigEntryServiceRouterRoutesMatchHttpQueryParam[] | cdktf.IResolvable) {
    this._queryParam.internalValue = value;
  }
  public resetQueryParam() {
    this._queryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamInput() {
    return this._queryParam.internalValue;
  }
}
export interface ConfigEntryServiceRouterRoutesMatch {
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#http ConfigEntryServiceRouter#http}
  */
  readonly http?: ConfigEntryServiceRouterRoutesMatchHttp;
}

export function configEntryServiceRouterRoutesMatchToTerraform(struct?: ConfigEntryServiceRouterRoutesMatchOutputReference | ConfigEntryServiceRouterRoutesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: configEntryServiceRouterRoutesMatchHttpToTerraform(struct!.http),
  }
}


export function configEntryServiceRouterRoutesMatchToHclTerraform(struct?: ConfigEntryServiceRouterRoutesMatchOutputReference | ConfigEntryServiceRouterRoutesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: configEntryServiceRouterRoutesMatchHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesMatchHttpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http.internalValue = value.http;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new ConfigEntryServiceRouterRoutesMatchHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ConfigEntryServiceRouterRoutesMatchHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}
export interface ConfigEntryServiceRouterRoutes {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#destination ConfigEntryServiceRouter#destination}
  */
  readonly destination?: ConfigEntryServiceRouterRoutesDestination;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#match ConfigEntryServiceRouter#match}
  */
  readonly match?: ConfigEntryServiceRouterRoutesMatch;
}

export function configEntryServiceRouterRoutesToTerraform(struct?: ConfigEntryServiceRouterRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: configEntryServiceRouterRoutesDestinationToTerraform(struct!.destination),
    match: configEntryServiceRouterRoutesMatchToTerraform(struct!.match),
  }
}


export function configEntryServiceRouterRoutesToHclTerraform(struct?: ConfigEntryServiceRouterRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: configEntryServiceRouterRoutesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesDestinationList",
    },
    match: {
      value: configEntryServiceRouterRoutesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigEntryServiceRouterRoutesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigEntryServiceRouterRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceRouterRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceRouterRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._match.internalValue = value.match;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ConfigEntryServiceRouterRoutesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ConfigEntryServiceRouterRoutesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new ConfigEntryServiceRouterRoutesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ConfigEntryServiceRouterRoutesMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class ConfigEntryServiceRouterRoutesList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceRouterRoutes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceRouterRoutesOutputReference {
    return new ConfigEntryServiceRouterRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router consul_config_entry_service_router}
*/
export class ConfigEntryServiceRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_config_entry_service_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigEntryServiceRouter to import
  * @param importFromId The id of the existing ConfigEntryServiceRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigEntryServiceRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_config_entry_service_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router consul_config_entry_service_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigEntryServiceRouterConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigEntryServiceRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_config_entry_service_router',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.21.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._meta = config.meta;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._routes.internalValue = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ConfigEntryServiceRouterRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ConfigEntryServiceRouterRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      routes: cdktf.listMapper(configEntryServiceRouterRoutesToTerraform, true)(this._routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(configEntryServiceRouterRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigEntryServiceRouterRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
